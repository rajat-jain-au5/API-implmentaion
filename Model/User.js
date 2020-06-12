// const mongoose = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});
const User = mongoose.model("user", userSchema);
module.exports = User;
