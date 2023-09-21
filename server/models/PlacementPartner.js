const mongoose = require("mongoose");

const placementPartnerSchema = mongoose.Schema({
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

const placementPartner = mongoose.model("placement", placementPartnerSchema);

module.exports = placementPartner;
