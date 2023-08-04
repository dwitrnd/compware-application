const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contacts = mongoose.model("contacts", contactSchema);

module.exports = contacts;
