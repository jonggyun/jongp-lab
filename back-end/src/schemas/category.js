const mongoose = require('mongoose');
const PostSchema = require('./post');

const { Schema } = mongoose;

const Category = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    unique: true,
  },
  public: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Category', Category);
