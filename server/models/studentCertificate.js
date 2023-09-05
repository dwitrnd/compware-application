const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  startDuration: {
    type: String,
  },
  endDuration: {
    type: String,
  },
  courseDuration: {
    type: String,
  },
  course: {
    type: String,
  },
  trainer: {
    type: String,
  },
  trainerTitle: {
    type: String,
  },
  verificationId: {
    type: String,
  },

  email: {
    type: String,
  },

  gender: {
    type: String,
  },

  photo: {
    type: String,
  },
});

const student = mongoose.model("studentCertificate", studentSchema);

module.exports = student;
