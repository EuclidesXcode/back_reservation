const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  babyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  numberAdress: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  cellNumber: {
    type: String,
    required: true,
  },
}, { timestamps: true });
const clients = mongoose.model('clients', schema);

module.exports = clients;
