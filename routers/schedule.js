const express = require('express');
const routers = express.Router();
const citiesService = require('../services/schedule')

routers.post('/get', (req,res) => {
    citiesService.getAll(req,res)
    
});
routers.post('/filter', (req,res) => {
    citiesService.filter(req,res)
});

routers.post('/', (req,res) => {
    citiesService.save(req,res)
});
routers.delete('/:id', (req,res) => {
    citiesService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    citiesService.update(req,res)
});

module.exports = routers;
