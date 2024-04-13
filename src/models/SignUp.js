const mongoose = require("mongoose");

const SignUp = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  user_id: String,
});

const SignUpModel = mongoose.model("SignUp", SignUp);

module.exports = SignUpModel;
