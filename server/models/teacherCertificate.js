const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: [String],
    required: true,
  },
});

const teacher = mongoose.model("teacherCertificate", teacherSchema);

module.exports = teacher;
