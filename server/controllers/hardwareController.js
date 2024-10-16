const { validationResult } = require("express-validator");
const hardware = require("../models/Hardware");

class hardwareController {
  static post = async (req, res) => {
    try {
      const { name, model, specification } = req.body;
        const file = req.files.photo;
      const timestamp = Date.now();
      const fileName = `photo_${timestamp}.jpeg`;
      console.log(fileName);
      file.mv(`./storage/${fileName}`, (error) => {
        if (error) {
            console.log(error);
          return res.status(500).send(error);
        }
        console.log("File Uploaded");
      });
      const Hardware = await new hardware({
        name, model, specification,
        photo: fileName,
      });
      console.log(Hardware);
      const result = await Hardware.save();
      console.log(result);
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        msg: error,
      });
    }
  };

  static get = async (req, res) => {
    try {
      const result = await hardware.find({});
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
    const { name, model, specifications } = req.body;

    console.log("hardware patch req");
    const hardwareId = req.params.id;

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
      const result = await hardware.findByIdAndUpdate(
        hardwareId,
        {
            name, model, specifications
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
      const data = await hardware.findOne({ _id: Id });
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
      const result = await hardware.deleteOne({ _id: Id });
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
module.exports = hardwareController;
