const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
  // document structure & rules
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^.+@.+\..+$/,
  },
  encryptedPassword: { type: String },
  role: {
    type: String,
    enum: [ "normal", "admin" ],
    required: true,
    default: "normal",
  },
}, {
  // additional settings for Schema constructor function (class)
  timestamps: true,
});

const User = mongoose.model("User", userSchema);


module.exports = User;
