const express = require('express');
const routers = express.Router();
const servicesService = require('../services/services')

routers.post('/get', (req,res) => {
    servicesService.getAll(req,res) 
});

routers.post('/', (req,res) => {
    servicesService.create(req,res)
});
routers.delete('/:id', (req,res) => {
    console.log("ENTROU NA ROTA:::: ", res);
    servicesService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    servicesService.update(req,res)
});

module.exports = routers;
