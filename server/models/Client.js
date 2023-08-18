const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;
