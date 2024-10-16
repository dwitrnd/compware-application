const mongoose = require("mongoose");
const newsletterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  link: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("newsletter", newsletterSchema);