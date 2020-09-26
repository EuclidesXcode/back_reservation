const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
  },
  testId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  testDates: {
      type: Array,
      required: true
  }
}, { timestamps: true });
const schedule = mongoose.model('schedule', schema);

module.exports = schedule;
