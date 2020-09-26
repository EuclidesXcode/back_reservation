const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
}, { timestamps: true });
const tests = mongoose.model('tests', schema);

module.exports = tests;
