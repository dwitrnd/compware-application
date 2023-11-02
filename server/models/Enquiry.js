const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: Number,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  enquiryDate: {
    type: String,
    required: true,
  },
  formSubmited: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["approved", "not approved"],
    default: "not approved",
  },
});

const enquiry = mongoose.model("enquiry", enquirySchema);

module.exports = enquiry;
