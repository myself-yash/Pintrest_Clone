const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb+srv://yash02:yash02@cluster0.l0c9tj5.mongodb.net/pintrest?retryWrites=true&w=majority")

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
