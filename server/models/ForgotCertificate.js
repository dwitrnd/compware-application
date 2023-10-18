const mongoose = require("mongoose");

const certificateSchema = mongoose.model({
  email: {
    type: String,
    required: true,
  },
  emailSentStatus: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const certificate = mongoose.model("Forgotcertificate", certificateSchema);

module.exports = certificate;
