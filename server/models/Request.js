const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  courseTrainer: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  startDate: {
    type: Number,
    required: true,
  },
  endDate: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["created", "not created"],
  },
});

const request = mongoose.model("request", requestSchema);

module.exports = request;
