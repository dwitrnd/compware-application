const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: Number,
    required: false,
    //unique: true,
  },
  course: {
    type: String,
    required: false,
  },
  enquiryDate: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["approved", "not approved"],
    default: "not approved",
  },
});

const enquiry = mongoose.model("enquiry", enquirySchema);

module.exports = enquiry;
