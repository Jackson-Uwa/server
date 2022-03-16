const mongoose = require("mongoose");

const appSchema = mongoose.Schema({
  name: { type: String, required: [true, "Input field is required"] },
  degree: { type: String, required: [true, "Input field is required"] },
});

module.exports = mongoose.model("applicants", appSchema);
