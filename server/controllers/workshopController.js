const { validationResult } = require("express-validator");
const workshop = require("../models/Workshop");

class workshopController {
  static post = async (req, res) => {
    try {
      const { title, date, article } = req.body;
      const file = req.files.logo;
      console.log("this", file);
      const timestamp = Date.now();
      const fileName = `photo_${timestamp}.jpeg`;

      file.mv(`./storage/${fileName}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("File Uploaded");
      });

      const Workshop = await new workshop({
        title,
        date,
        logo: fileName,
        article,
      });

      const result = await Workshop.save();
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
      const result = await workshop.find({});
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
    const { title, date, article } = req.body;

    console.log("workshop patch req");
    const workshopId = req.params.id;

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
      const result = await workshop.findByIdAndUpdate(
        workshopId,
        {
          title,
          date,
          // logo: fileName,
          article,
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
      const data = await workshop.findOne({ _id: Id });
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
      const result = await workshop.deleteOne({ _id: Id });
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
module.exports = workshopController;
