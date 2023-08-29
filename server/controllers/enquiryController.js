const Enquiry = require("../models/Enquiry");
const https = require("https");

// const recaptchaSecret = "6LczgZknAAAAANrM1kLuALwLh4rqE46csLQ3iwJN"; // Replace with your reCAPTCHA secret key

class enquiryController {
  static post = async (req, res) => {
    try {
      const { name, email, phoneNum, course, enquiryDate } = req.body;

      const enquiry = new Enquiry({
        name,
        email,
        phoneNum,
        course,
        enquiryDate,
      });
      enquiry.save((err, result) => {
        if (err) {
          return res.status(500).json({
            status: false,
            msg: err,
          });
        }
        res.status(200).json({
          status: true,
          msg: result,
        });
      });
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      res.status(500).json({
        status: false,
        msg: "Internal server error",
      });
    }
  };

  static get = async (req, res) => {
    try {
      const result = await Enquiry.find({});
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
    try {
      const { name, phoneNum, course, enquiryDate, status } = req.body;
      const enquiryId = req.params.id;
      const result = await Enquiry.findByIdAndUpdate(enquiryId, { name, phoneNum, course, enquiryDate, status }, { new: true });
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

  static getOne = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Enquiry.findOne({ _id: Id });
      if (!result) {
        throw new Error("No data");
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        msg: "No such ID",
      });
    }
  };

  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Enquiry.deleteOne({ _id: Id });
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

module.exports = enquiryController;
