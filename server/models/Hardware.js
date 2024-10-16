const mongoose = require("mongoose");
const hardwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  photo: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  specification:{
    type: String,
     required: false
  }
});

module.exports = mongoose.model("hardware", hardwareSchema);