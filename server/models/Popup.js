const mongoose = require("mongoose");

const popupSchema = mongoose.Schema({
  Image: {
    type: String,
    required: true,
  },
  ImageName: {
    type: String,
    required: true,
  },
  ImageAltText: {
    type: String,
    required: true,
  },
});

const popup = mongoose.model("popup", popupSchema);

module.exports = popup;
