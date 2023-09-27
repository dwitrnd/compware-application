const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categories: {
    type: String,
    required: true,
  },
});

const courseCategory = mongoose.model("courseCategory", categorySchema);

module.exports = courseCategory;
