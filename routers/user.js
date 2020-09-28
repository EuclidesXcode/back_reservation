const express = require('express');
const routers = express.Router();
const userServices = require('../services/user')

routers.post('/', (req,res) => {
    userServices.create(req,res)
})
routers.put('/:id', (req,res) => {
    userServices.updatePass(req,res)
})
routers.delete('/:id', (req,res) => {
    userServices.delete(req,res)
})
routers.post('/getUsers', (req,res) => {
    userServices.getAll(req,res)
})
module.exports = routers