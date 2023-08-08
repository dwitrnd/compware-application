const mongoose = require("mongoose");

const partnerSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    required: true,
  },
});

const PlacementPartners = mongoose.model("partners", partnerSchema);

module.exports = PlacementPartners;
