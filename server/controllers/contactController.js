const contact = require("../models/Contact");
const { validationResult } = require("express-validator");

class contactController {
  static post = async (req, res) => {
    try {
      const { fullName, email, number, message } = req.body;
      const Contact = await new contact({
        fullName,
        email,
        number,
        message,
      });
      const result = await Contact.save();
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
      const result = await contact.find({});
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
}

module.exports = contactController;
