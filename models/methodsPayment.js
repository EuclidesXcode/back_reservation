const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  }
}, { timestamps: true });
const methodsPayment = mongoose.model('methodsPayment', schema);

module.exports = methodsPayment;
