const express = require('express');
const routers = express.Router();
const statesService = require('../services/clients')

routers.post('/get', (req,res) => {
    statesService.getAll(req,res)
    
});
routers.post('/filter', (req,res) => {
    statesService.filter(req,res)
});

routers.post('/', (req,res) => {
    statesService.save(req,res)
});
routers.delete('/:id', (req,res) => {
    statesService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    statesService.update(req,res)
});

module.exports = routers;
