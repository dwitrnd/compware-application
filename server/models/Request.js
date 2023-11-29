const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  courseTrainer: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["created", "not created"],
  },
});

const request = mongoose.model("request", requestSchema);

module.exports = request;
