const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  gmail: String,
  profilepic: String,
});
const usermodel = mongoose.model("user", userSchema);
module.exports = {
  usermodel,
};
