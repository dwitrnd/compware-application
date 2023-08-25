const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  course: {
    type: [String],
    required: false,
  },
  trainer: {
    type: [String],
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  courseDuration: {
    type: String,
    required: false,
  },
  trainerTitle: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  traineeID: {
    type: String,
    required: false,
  },
  qrURL: {
    type: String,
    required: false,
  },
});

const student = mongoose.model("studentCertificate", studentSchema);

module.exports = student;
