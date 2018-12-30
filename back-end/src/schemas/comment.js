const mongoose = require('mongoose');

const { Schema } = mongoose;

const Comment = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  // 여기는 유저랑 안겹침
  writer: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  public: {
    type: Boolean,
    required: true,
  },
});

exports.CommentSchema = Comment;

//module.exports = mongoose.model('Comment', Comment);
