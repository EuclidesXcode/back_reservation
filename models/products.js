const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  uriImages: {
    type: Array,
    required: false,
  },
  group: {
    type: String,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  quantity: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: true,
  },
}, { timestamps: true });
const products = mongoose.model('products', schema);

module.exports = products;
