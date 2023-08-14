const contact = require("../models/Contact");
const https = require("https");
const { validationResult } = require("express-validator");

const recaptchaSecret = "6LczgZknAAAAANrM1kLuALwLh4rqE46csLQ3iwJN"; // Replace with your reCAPTCHA secret key

class contactController {
  static post = async (req, res) => {
    try {
      const { fullName, email, number, message, recaptchaValue } = req.body;

      // Validate form data using Express Validator
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Verify reCAPTCHA
      const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaValue}`;

      https.get(verificationURL, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const recaptchaResponse = JSON.parse(data);
            if (!recaptchaResponse.success) {
              return res.status(400).json({
                status: false,
                msg: "reCAPTCHA verification failed",
              });
            }

            const newContact = new contact({
              fullName,
              email,
              number,
              message,
            });

            newContact.save((err, result) => {
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
        });
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
