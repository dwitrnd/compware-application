const { validationResult } = require("express-validator");
const student = require("../models/studentCertificate");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
class studentController {
  static post = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        course,
        trainer,
        gender,
        courseDuration,
        trainerTitle,
        startDate,
        endDate,
        traineeID,
      } = req.body;

      const file = req.files.photo;

      console.log(file);

      const timestamp = Date.now();

      const fileName = `photo_${timestamp}.jpeg`;

      file.mv(`./storage/${fileName}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("File Uploaded!");
      });
      const token = jwt.sign({ userEmail: email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "99999999999d",
      });

      console.log(token);

      const Student = await new student({
        firstName,
        lastName,
        email,
        course,
        trainer,
        gender,
        courseDuration,
        trainerTitle,
        startDate,
        endDate,
        traineeID,
        qrURL: `${process.env.FRONT_END_LINK}/verify-certificate/${token}`,
        photo: fileName,
      });
      const result = await Student.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };

  static checkCertificateToken = async (req, res) => {
    const token = req.params.token;
    console.log(token);
    try {
      const { userEmail } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (!userEmail) {
        res.status(200).json({
          status: false,
          msg: "Email not found",
        });
      }
      const fullData = await student.findOne({ email: userEmail });
      if (!fullData) {
        res.status(400).json({
          status: false,
          msg: "No data",
        });
      }
      res.status(200).json({
        status: true,
        msg: fullData,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: "Invalid Token!",
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
    const {
      firstName,
      lastName,
      email,
      course,
      trainer,
      gender,
      courseDuration,
      trainerTitle,
      startDate,
      endDate,
      traineeID,
      photo,
    } = req.body;
    const studentId = req.params.id;
    const savedCerti = await student.findById(studentId);
    try {
      if (req.files) {
        const file = req.files.photo;
        const timestamp = Date.now();
        const fileName = `photo_${timestamp}.jpeg`;

        file.mv(`./storage/${fileName}`, (error) => {
          if (error) {
            return res.status(500).send(error);
          }
          console.log("Upload Successful!");
        });

        const oldFilePath = `./storage/${savedCerti.photo}`;
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log("Previous Image Deleted!");
        });
        const result = await student.findByIdAndUpdate(
          studentId,
          {
            firstName,
            lastName,
            email,
            course,
            trainer,
            gender,
            courseDuration,
            trainerTitle,
            startDate,
            endDate,
            traineeID,
            photo: fileName,
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
        const result = await student.findByIdAndUpdate(
          studentId,
          {
            firstName,
            lastName,
            email,
            course,
            trainer,
            gender,
            courseDuration,
            trainerTitle,
            startDate,
            endDate,
            traineeID,
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
