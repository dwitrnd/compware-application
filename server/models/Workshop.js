const mongoose = require("mongoose");

const workshopSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
});

const workshop = mongoose.model("workshop", workshopSchema);

module.exports = workshop;
