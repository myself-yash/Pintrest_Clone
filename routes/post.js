const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/pinterestPost")

// Define Post Schema
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  image:{
    type: String
  },
  user:{
    type : mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

// Create Post Model
const Post = mongoose.model('Post', postSchema);

// Export Post Model
module.exports = Post;
