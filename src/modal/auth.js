const mongoose = require("mongoose");
const validator = require("validator");

// create schema
const authSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email is allready present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  password: {
    type: String,
    require: true,
  },
});

// create documentation
const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;
