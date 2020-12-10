const express = require('express');
const routers = express.Router();
const paymentService = require('../services/payment')

routers.post('/get', (req,res) => {
    paymentService.getAll(req,res) 
});

routers.post('/', (req,res) => {
    paymentService.create(req,res)
});
routers.delete('/:id', (req,res) => {
    paymentService.delete(req,res)
});

module.exports = routers;
