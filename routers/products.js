const express = require('express');
const routers = express.Router();
const productsService = require('../services/products')

routers.post('/get', (req,res) => {
    productsService.getAll(req,res) 
});

routers.post('/', (req,res) => {
    productsService.create(req,res)
});
routers.delete('/:id', (req,res) => {
    productsService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    productsService.update(req,res)
});

module.exports = routers;
