const { validationResult } = require("express-validator");
const gallery = require("../models/Gallery");
const { default: mongoose } = require("mongoose");
const fs=require("fs");

class galleryControllers {
    static post = async (req, res) => {
        console.log(req.body);
        try {
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const {galleryCategoryName} = req.body;
            const existingCategory = await gallery.findOne({ galleryCategoryName });

            if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
            }

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).json({ message: "No files were uploaded" });
              }
          
              const images = [];
              for (const file of Object.values(req.files.images)) {
            //   Object.values(req.files.images).forEach((file) => {
                const timestamp = Date.now();
                const imageName = `images_${timestamp}${file.name.slice(0,1)}.jpg`;
          
                // Move the file to the 'uploads/' directory
                file.mv(`./storage/${imageName}`);
          
                images.push(imageName);
              };
            const newGallery = await new gallery({
                galleryCategoryName,
                images: images
            });
            const result = await newGallery.save();

            res.status(200).json({
                status: true,
                msg: result,
            });
        }
        catch (error) {
            res.status(404).json({
                status: false,
                msg: "Internal Server Error",
            });
            console.log("here")
            console.log(error)
        }
    };
    static get = async (req, res) => {
        try {
          const result = await gallery.find({});
          res.status(200).json({
            status: true,
            msg:result
          });
        } catch (error) {
          console.error("Error fetching categories:", error);
          res.status(500).json({
            status: false,
            msg: "Internal Server Error",
          });
        }
      };
      static getOne=async(req,res)=>{
        const{id}=req.params;
        try{
            const isValidObjectId=mongoose.isValidObjectId(id);
            if(!isValidObjectId){
                return res.status(400).json({status:false,msg:'Invalid object id'});
            }
            const result=await gallery.findById(id);
            if(!result){
                return res.status(404).json({ status: false, msg: 'Document not found' });
            }
            res.status(200).json({ status: true, data: result });
        }
        catch(error){
            console.error('Error fetching document:', error);
            res.status(500).json({ status: false, msg: 'Internal Server Error' });
        }
    };

    static patch = async (req, res) => {
      console.log(req.body);
      try {
          const { galleryCategoryName, action, imageNameToDelete } = req.body;
  
          // Check for validation errors
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
          }
  
          // Check if the gallery category exists
          const existingCategory = await gallery.findOne({ galleryCategoryName });
          if (!existingCategory) {
              return res.status(404).json({ message: "Category not found" });
          }
  
          if (action === "addImage") {
              // Add new image
              if (!req.files || Object.keys(req.files).length === 0) {
                  return res.status(400).json({ message: "No files were uploaded" });
              }
  
              const file = req.files.newImage;
              const timestamp = Date.now();
              const newImageName = `images_${timestamp}${file.name.slice(0, 1)}.jpg`;
  
              file.mv(`./storage/${newImageName}`);
  
              existingCategory.images.push(newImageName);
          } else if (action === "deleteImage") {
              // Delete specific image
              const indexToDelete = existingCategory.images.indexOf(imageNameToDelete);
  
              if (indexToDelete === -1) {
                  return res.status(404).json({ message: "Image not found in the category" });
              }
  
              // Remove the image from the array
              existingCategory.images.splice(indexToDelete, 1);
          } else {
              return res.status(400).json({ message: "Invalid action" });
          }
  
          // Save the updated category
          const result = await existingCategory.save();
  
          res.status(200).json({
              status: true,
              msg: result,
          });
      } catch (error) {
          res.status(500).json({
              status: false,
              msg: "Internal Server Error",
          });
          console.log(error);
      }
  };  
    
      
      static deleteAll = async (req, res) => {
        try {
          const result = await gallery.deleteMany({});
          res.status(200).json({
            status: true,
            msg: `Deleted ${result.deletedCount} documents from the gallery collection.`,
          });
        } catch (error) {
          console.error("Error deleting documents:", error);
          res.status(500).json({
            status: false,
            msg: "Internal Server Error",
          });
        }
      };
      static delete = async (req, res) => {
        try {
          const Id = req.params.id;
          const result = await gallery.deleteOne({ _id: Id });
          console.log(result);
          res.status(200).json({
            status: true,
            msg: "Deletion Successful!",
          });
        } catch (err) {
          res.status(400).json({
            status: false,
            msg: "Id does not exist!",
          });
        }
      };
}
module.exports = galleryControllers