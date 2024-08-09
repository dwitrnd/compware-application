const { validationResult } = require("express-validator");
const client = require("../models/Client");

class clientController {
  static post = async (req, res) => {
    try {
      const { ImageName, ImageAltText } = req.body;
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

      const Client = await new client({
        Image: filename,
        ImageName,
        ImageAltText,
      });
      const result = await Client.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      // console.log(err);
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };

  static get = async (req, res) => {
    try {
      const result = await client.find({});
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
    const notificationId = req.params.id;
    if (Image) {
      const file = req.files.Image;
      const timestamp = Date.now();
      const fileName = `photo_${timestamp}.jpeg`;

      file.mv(`./storage/${fileName}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("Upload Successful!");
      });
      Image = fileName;
    }
    try {
      const result = await client.findByIdAndUpdate(
        notificationId,
        {
          ImageName,
          ImageAltText,
        },
        { new: true }
      );
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
        msg: "Check Id again",
      });
    }
  };

  static getOne = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await client.findOne({ _id: Id });
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
      const result = await client.deleteOne({ _id: Id });
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

module.exports = clientController;
