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
            const existingCategory = await gallery.findOne({ galleryCategoryName:{ $regex: new RegExp('^' + galleryCategoryName + '$', 'i') } });

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
                const randomString = Math.random().toString(36).substring(2, 8); // Random string of length 6
                const fileExtension = file.name.split('.').pop();
                const imageName = `images_${timestamp}_${randomString}.${fileExtension}`;
          
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
      try {
        const { galleryCategoryName } = req.body;
    
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const categoryId = req.params.id;
    
        // Find the existing category by ID
        const existingCategory = await gallery.findById(categoryId);
    
        if (!existingCategory) {
          return res.status(404).json({ message: "Category not found" });
        }
    
        // Update category name if provided
        if (galleryCategoryName) {
          existingCategory.galleryCategoryName = galleryCategoryName;
        }
    
        // Check if new images are uploaded
        if (req.files && Object.keys(req.files).length > 0) {
          const newImages = [];
    
          if (Array.isArray(req.files.images)) {
            // Handle the case when multiple images are uploaded
            for (const file of Object.values(req.files.images)) {
              const timestamp = Date.now();
              const randomString = Math.random().toString(36).substring(2, 8); // Random string of length 6
              const fileExtension = file.name.split('.').pop();
              const imageName = `images_${timestamp}_${randomString}.${fileExtension}`;
    
              // Move the file to the 'storage/' directory
              file.mv(`./storage/${imageName}`);
    
              newImages.push(imageName);
            }
          } else {
            // Handle the case when a single image is uploaded
            const file = req.files.images;
            const timestamp = Date.now();
            const randomString = Math.random().toString(36).substring(2, 8); // Random string of length 6
            const fileExtension = file.name.split('.').pop();
            const imageName = `images_${timestamp}_${randomString}.${fileExtension}`;
    
            // Move the file to the 'storage/' directory
            file.mv(`./storage/${imageName}`);
    
            newImages.push(imageName);
          }
    
          // Add new images to the existing category
          existingCategory.images = existingCategory.images.concat(newImages);
        }
    
        // Save the updated category
        const updatedCategory = await existingCategory.save();
    
        res.status(200).json({
          status: true,
          msg: updatedCategory,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          status: false,
          msg: "Internal Server Error",
        });
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

      static deleteImage = async (req, res) => {
        try {
          const { id, imageName } = req.params;
    
          // Validate ObjectId
          const isValidObjectId = mongoose.isValidObjectId(id);
          if (!isValidObjectId) {
            return res.status(400).json({ status: false, msg: "Invalid object id" });
          }
    
          // Find the gallery by ID
          const existingCategory = await gallery.findById(id);
          if (!existingCategory) {
            return res.status(404).json({ status: false, msg: "Gallery not found" });
          }
    
          // Check if the image exists in the images array
          const imageIndex = existingCategory.images.indexOf(imageName);
          if (imageIndex === -1) {
            return res.status(404).json({ status: false, msg: "Image not found" });
          }
    
          // Remove the image from the images array
          existingCategory.images.splice(imageIndex, 1);
    
          // Save the updated gallery
          const updatedGallery = await existingCategory.save();
    
          // Delete the image file from storage
          const imagePath = `./storage/${imageName}`;
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
    
          res.status(200).json({
            status: true,
            msg: "Image deleted successfully",
            data: updatedGallery,
          });
        } catch (error) {
          console.error("Error deleting image:", error);
          res.status(500).json({ status: false, msg: "Internal Server Error" });
        }
      };

}

module.exports = galleryControllers