const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({

  idClient: {
    type: String,
    required: false
  },
  products: {
    type: Array,
    required: false
  },
  services: {
    type: Array,
    required: false
  },
  status: {
      type: Number,
      required: false
  },
  statusText: {
      type: String,
      required: false
  },
}, { timestamps: true });
const sales = mongoose.model('sales', schema);

module.exports = sales;
