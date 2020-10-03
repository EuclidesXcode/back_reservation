const express = require('express');
const routers = express.Router();
const shedueService = require('../services/schedule')

routers.post('/get', (req,res) => {
    shedueService.getAll(req,res)
    
});
routers.post('/filter', (req,res) => {
    shedueService.filter(req,res)
});

routers.post('/', (req,res) => {
    shedueService.save(req,res)
});
routers.delete('/:id', (req,res) => {
    shedueService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    shedueService.update(req,res)
});

module.exports = routers;
