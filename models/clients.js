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
  cpf: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  complement: {
    type: String
  },
  cep: {
    type: String
  },
  city: {
    type: String
  },
  email: {
    type: String
  },
  bairro: {
    type: String
  },
  celPhone: {
    type: String
  },
  phone: {
    type: String
  },
}, { timestamps: true });
const clients = mongoose.model('clients', schema);

module.exports = clients;
