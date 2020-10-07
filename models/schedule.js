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
  plots: {
    type: String,
    required: true,
  },
  sinal: {
    type: Boolean,
    required: true,
  },
  listSchedules: {
      type: Object,
      required: true
  },
  obs: {
    type: String,
    required: true,
  },
}, { timestamps: true });
const schedule = mongoose.model('schedule', schema);

module.exports = schedule;
