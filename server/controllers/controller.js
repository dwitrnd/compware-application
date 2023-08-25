const certificate = require("../models/ForgotCertificate");

class controller {
  static post = async (req, res) => {
    try {
      const { email, emailSentStatus } = req.body;
      const Certificate = await new certificate({
        email,
        emailSentStatus,
      });
      const result = await Certificate.save();
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
      const result = await certificate.find({});
      res.status.json({
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

  static getone = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await certificate.findOne({ _id: Id });
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
        msg: "Certificate Not Found!",
      });
    }
  };
}

module.exports = controller;
