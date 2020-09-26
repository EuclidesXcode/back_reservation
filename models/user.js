const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
}, { timestamps: true });
const user = mongoose.model('user', schema);

module.exports = user;
