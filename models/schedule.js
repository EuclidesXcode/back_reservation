const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  test: {
    type: String,
    required: true,
  },
  payment: {
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
      type: Array,
      required: true
  },
  obs: {
    type: String,
    required: true,
  },
}, { timestamps: true });
const schedules = mongoose.model('agendamentos', schema);

module.exports = schedules;
