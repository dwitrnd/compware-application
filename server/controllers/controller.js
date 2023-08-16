const certificate = require("../models/ForgotCertificate");

class controller {
  static post = async (req, res) => {
    const { email, emailSentStatus } = req.body;
    const Certificate = await new certificate({
      email,
      emailSentStatus,
    });
    
  };
}
