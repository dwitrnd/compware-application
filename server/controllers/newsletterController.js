const { validationResult } = require("express-validator");
const newsletter = require("../models/Newsletter");

class newsletterController {
  static post = async (req, res) => {
    try {
      const { name, link } = req.body;
      console.log(req.body);
      const Newsletter = await new newsletter({
        name, link
      });
      console.log(Newsletter);
      const result = await Newsletter.save();
      console.log(result);
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
        console.log(error);
      res.status(500).json({
        status: false,
        msg: error,
      });
    }
  };

  static get = async (req, res) => {
    try {
      const result = await newsletter.find({});
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
    const { name, link } = req.body;

    console.log("newsletter patch req");
    const newsletterId = req.params.id;

    console.log(req.body);

    // if (logo) {
    //   const file = req.files.logo;
    //   const timestamp = Date.now();
    //   const fileName = `photo_${timestamp}.jpeg`;

    //   file.mv(`./storage/${fileName}`, (error) => {
    //     if (error) {
    //       return res.status(500).send(error);
    //     }
    //     console.log("File Uploaded!");
    //   });
    //   logo = fileName;
    // }
    try {
      const result = await newsletter.findByIdAndUpdate(
        newsletterId,
        {
            name, link
        },
        { new: true }
      );
      if (!result) {
        throw new Error("Not Updated");
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        msg: error,
      });
    }
  };
  static getOne = async (req, res) => {
    const Id = req.params.id;
    try {
      const data = await newsletter.findOne({ _id: Id });
      if (!data) {
        throw new Error("no data found");
      }
      res.status(200).json({
        status: true,
        msg: data,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        msg: err,
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await newsletter.deleteOne({ _id: Id });
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
module.exports = newsletterController;
