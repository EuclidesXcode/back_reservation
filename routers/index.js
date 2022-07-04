const clientsRouters = require('./clients');
const productsRouters = require('./products');
const userRouters = require('./user');
const authRouter = require('./auth');
const express = require('express');
const routers = express.Router();
const authMiddleware = require('../middlewares/auth');

routers.use('/user', userRouters);
routers.use('/products', productsRouters);
routers.use('/auth', authRouter);
// . . . Rotas abaixo necessitam de authenticação . . .
// routers.use(authMiddleware);
routers.use('/clients', clientsRouters);


module.exports = routers