const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/pinterest")

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],

  dp: {
    type: String, // Assuming dp is a URL or file path to the profile picture
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  fullname:{
    type: String,
    required : true
  }
});

userSchema.plugin(plm)

// Create User Model
const User = mongoose.model('User', userSchema);

// Export User Model
module.exports = User;
