const express = require('express');
const routers = express.Router();
const methodsPaymentService = require('../services/methodsPayments')

routers.post('/get', (req,res) => {
    methodsPaymentService.getAll(req,res) 
});

routers.post('/', (req,res) => {
    methodsPaymentService.save(req,res)
});
routers.delete('/:id', (req,res) => {
    methodsPaymentService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    methodsPaymentService.update(req,res)
});

module.exports = routers;
