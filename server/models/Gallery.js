const mongoose = require("mongoose");

const gallerySchema=mongoose.Schema({
  galleryCategoryName:{
    type:String,
    required:true,
  },
  images: [String],
})

const gallery = mongoose.model("gallery", gallerySchema);

module.exports = gallery;