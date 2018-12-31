const mongoose = require('mongoose');

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
//const Comment = require('./comment');

const Post = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  // 유저 스키마 참조
  writer: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  category: {
    type: ObjectId,
    required: true,
    ref: 'Category',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  thumnail: {
    type: String,
    required: false,
  },
  thumnailPath: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
  public: {
    type: Boolean,
    required: true,
  },
  // comment: {
  //   type: [ObjectId],
  //   required: false,
  //   ref: 'Comment',
  // },
});

module.exports = mongoose.model('Post', Post);
