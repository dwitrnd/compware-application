const { validationResult } = require("express-validator");
const student = require("../models/studentCertificate");

class studentController {
  static post = async (req, res) => {
    try {
      const { fullName, startDuration, endDuration, courseDuration, course, trainer, trainerTitle, verificationId, email } = req.body;

      // const file = req.files.photo;

      // console.log(file);

      // const timestamp = Date.now();

      // const fileName = `photo_${timestamp}.jpeg`;

      // file.mv(`./storage/${fileName}`, (error) => {
      //   if (error) {
      //     return res.status(500).send(error);
      //   }
      //   console.log("File Uploaded!");
      // });
      const Student = await new student({
        fullName,
        startDuration,
        endDuration,
        courseDuration,
        course,
        trainer,
        trainerTitle,
        verificationId,
        email,
        // photo: fileName,
      });

      const result = await Student.save();
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

  static checkId = async (req, res) => {
    try {
      const result = await student.find({ verificationId: req.body.verificationId });

      if (result.length === 0) {
        throw Error;
      }
      res.status(200).json({
        status: true,
        msg: "Id exists",
        data: result,
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
      const result = await student.find({});
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
    const { fullName, startDuration, endDuration, courseDuration, course, trainer, trainerTitle, verificationId, email } = req.body;

    console.log(req.body);

    const Id = req.params.id;

    const result = await student.updateOne(
      { _id: Id },
      {
        $set: {
          fullName,
          startDuration,
          endDuration,
          courseDuration,
          course,
          trainer,
          trainerTitle,
          verificationId,
          email,
        },
      }
    );
    res.status(200).json({
      status: true,
      msg: result,
    });
  };

  static getOne = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await student.findOne({ _id: Id });
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
      const result = await student.deleteOne({ _id: Id });
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
module.exports = studentController;
