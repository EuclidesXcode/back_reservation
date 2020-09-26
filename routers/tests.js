const express = require('express');
const routers = express.Router();
const testsService = require('../services/tests')

routers.post('/get', (req,res) => {
    testsService.getAll(req,res) 
});

routers.post('/', (req,res) => {
    testsService.save(req,res)
});
routers.delete('/:id', (req,res) => {
    testsService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    testsService.update(req,res)
});

module.exports = routers;
