const mongoose = require('mongoose');

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const UserSchema = require('./user');
const CommentSchema = require('./comment');

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
  writer: UserSchema,
  // 혹은 참조하는 거니까 이렇게?? 하는게 맞는건가
  writer: {
    type: ObjectId,
    required: true,
    ref: 'UserSchema',
  },
  category: {
    type: ObjectId,
    required: true,
    ref: 'CategorySchema',
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
  }, // mongoDB로 넘어오면서 따로 테이블처리할 필요가 없어짐
  hashcode: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
    equired: true,
  },
  comment: [CommentSchema],
});

module.exports = mongoose.model('Post', Post);
