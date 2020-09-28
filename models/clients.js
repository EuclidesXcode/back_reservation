const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  codNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  babyName: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  address: {
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
  bairro: {
    type: String,
    required: true,
  },
  celPhone: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, { timestamps: true });
const clients = mongoose.model('clients', schema);

module.exports = clients;
