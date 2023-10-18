const { validationResult } = require("express-validator");
const notifications = require("../models/Notifications");
const fs = require("fs");

class notificationController {
  static post = async (req, res) => {
    try {
      const { footer, link } = req.body;
      const file = req.files.image;

      const timestamp = Date.now();
      const filename = `photo_${timestamp}.jpeg`;

      file.mv(`./storage/${filename}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("Upload Successful");
      });

      const Noti = new notifications({
        image: filename,
        footer,
        link,
      });
      const result = await Noti.save();
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
      const result = await notifications.find({});
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
    const { image, footer, link } = req.body;
    const notificationId = req.params.id;
    const savedNoti = await notifications.findById(notificationId);
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

        const oldFilePath = `./storage/${savedNoti.image}`;
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log("Previous Image Deleted!");
        });
        const result = await notifications.findByIdAndUpdate(
          notificationId,
          {
            image: fileName,
            footer,
            link,
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
        const result = await notifications.findByIdAndUpdate(
          notificationId,
          {
            footer,
            link,
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
      const result = await notifications.findOne({ _id: Id });
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
      const result = await notifications.deleteOne({ _id: Id });
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

module.exports = notificationController;
