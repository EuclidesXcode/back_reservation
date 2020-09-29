const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  }
}, { timestamps: true });
const payment = mongoose.model('payment', schema);

module.exports = payment;
