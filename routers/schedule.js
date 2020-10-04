const express = require('express');
const routers = express.Router();
const sheduleService = require('../services/schedule')

routers.post('/get', (req,res) => {
    sheduleService.getAll(req,res)
    
});
routers.post('/filter', (req,res) => {
    sheduleService.filter(req,res)
});

routers.post('/', (req,res) => {
    console.log("entrou pra salvar o agendamento")
    sheduleService.save(req,res)
});
routers.delete('/:id', (req,res) => {
    sheduleService.delete(req,res)
});
routers.put('/:id', (req,res) => {
    sheduleService.update(req,res)
});

module.exports = routers;
