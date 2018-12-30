const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: false,
  },
  imageName: {
    type: String,
    required: false,
  },
  auth: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('User', User);
