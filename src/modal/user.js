const mongoose = require("mongoose");

// create schema
const userSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    enum: ["Todo", "Inprogress", "Done"],
  },
});

// create documentation
const User = mongoose.model("User", userSchema);
module.exports = User;
