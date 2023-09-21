const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  Image: {
    type: String,
    required: true,
  },
  ImageName: {
    type: String,
    required: true,
    unique: true,
  },
  ImageAltText: {
    type: String,
    required: true,
  },
});

const client = mongoose.model("client", clientSchema);

module.exports = client;
