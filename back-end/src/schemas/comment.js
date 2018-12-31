const mongoose = require('mongoose');

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const Comment = new Schema({
  // objectId를 사용해보자.
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  // 여기는 유저랑 안겹침
  postId: {
    type: ObjectId,
    required: true,
    ref: 'Post',
  },
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

//exports.Comment = Comment;
module.exports = mongoose.model('Comment', Comment);
