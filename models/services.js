const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
}, { timestamps: true });
const services = mongoose.model('services', schema);

module.exports = services;
