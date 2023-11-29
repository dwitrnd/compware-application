const mongoose = require("mongoose");

const gallerySchema=mongoose.Schema({
  galleryCategoryName:{
    type:String,
    required:true,
  },
  images:[
    {
        type: String,
        required:true,
        unique:true
    },
  ]
})

const gallery = mongoose.model("gallery", gallerySchema);

module.exports = gallery;
