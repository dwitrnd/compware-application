const Request = require("../models/Request");

class requestController {
  static post = async (req, res) => {
    try {
      const {
        fullName,
        email,
        contactNumber,
        course,
        courseTrainer,
        endTime,
        startTime,
      } = req.body;

      const request = new Request({
        fullName,
        email,
        contactNumber,
        course,
        courseTrainer,
        endTime,
        startTime,
      });

      const result = await request.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      if (
        err.code === 11000 &&
        err.keyPattern &&
        err.keyPattern.contactNumber === 1
      ) {
        // Duplicate key error for the contactNumber field
        res.status(400).json({
          status: false,
          msg: "Duplicate contact number. Please provide a unique contact number.",
        });
      } else {
        // Other errors
        res.status(500).json({
          status: false,
          msg: err.message,
        });
      }
    }
  };

  static get = async (req, res) => {
    try {
      const result = await Request.find({});
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
      const {
        fullName,
        email,
        contactNumber,
        course,
        courseTrainer,
        endTime,
        startTime,
      } = req.body;
      const requestId = req.params.id;
      const result = await Request.findByIdAndUpdate(
        requestId,
        {
          fullName,
          email,
          contactNumber,
          course,
          courseTrainer,
          endTime,
          startTime,
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        msg: "Id not found",
      });
    }
  };

  static getOne = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Request.findOne({ _id: Id });

      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        msg: "No such id",
      });
    }
  };

  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Request.deleteOne({ _id: Id });
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

module.exports = requestController;
