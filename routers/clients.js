const express = require('express');
const routers = express.Router();
const clientsService = require('../services/clients')

routers.post('/get', (req,res) => {
    clientsService.getAll(req,res)
});
routers.post('/filter', (req,res) => {
    clientsService.filter(req,res)
});
routers.post('/createClient', (req,res) => {
    clientsService.create(req,res)
});
routers.delete('/:id', (req,res) => {
    clientsService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    clientsService.update(req,res)
});

module.exports = routers;
