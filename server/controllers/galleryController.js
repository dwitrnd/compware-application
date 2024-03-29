const { validationResult } = require("express-validator");
const gallery = require("../models/Gallery");
const fs = require("fs");

class galleryController {
  static post = async (req, res) => {
    try {
      const { ImageName, ImageAltText, Image } = req.body;
      const file = req.files.Image;

      const timestamp = Date.now();
      const filename = `photo_${timestamp}.jpeg`;
      console.log("--------------------------------------");
      file.mv(`./storage/${filename}`, (error) => {
        if (error) {
          console.log("YOUR ERROR IS :", error);
          return res.status(500).send(error);
        }
        console.log("Upload Successful");
      });

      const Gallery = await new gallery({
        Image: filename,
        ImageName,
        ImageAltText,
      });
      const result = await Gallery.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };

  static get = async (req, res) => {
    try {
      const result = await gallery.find({});
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };
  static patch = async (req, res) => {
    const { ImageName, ImageAltText, Image } = req.body;
    const galleryId = req.params.id;
    const savedGallery = await gallery.findById(galleryId);
    try {
      if (req.files) {
        const file = req.files.Image;
        const timestamp = Date.now();
        const fileName = `photo_${timestamp}.jpeg`;

        file.mv(`./storage/${fileName}`, (error) => {
          if (error) {
            return res.status(500).send(error);
          }
          console.log("Upload Successful!");
        });

        const oldFilePath = `./storage/${savedGallery.Image}`;
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log("Previous Image Deleted!");
        });
        const result = await gallery.findByIdAndUpdate(
          galleryId,
          {
            Image: fileName,
            ImageName,
            ImageAltText,
          },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            status: false,
            msg: "Check Id again",
          });
        }
        res.status(200).json({
          status: true,
          msg: result,
        });
      } else {
        const result = await gallery.findByIdAndUpdate(
          galleryId,
          {
            ImageName,
            ImageAltText,
          },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            status: false,
            msg: "Check Id again",
          });
        }
        res.status(200).json({
          status: true,
          msg: result,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };

  static getOne = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await gallery.findOne({ _id: Id });
      if (!result) {
        throw Error;
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        msg: "Invalid ID",
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

module.exports = galleryController;
