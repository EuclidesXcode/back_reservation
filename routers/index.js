const clientsRouters = require('./clients');
const testsRouters = require('./tests');
const productsRouters = require('./products');
const salesRouters = require('./sales');
const servicesRouters = require('./services');
const paymentsRouters = require('./payment');
const scheduleRouters = require('./schedule');
const userRouters = require('./user');
const authRouter = require('./auth');
const express = require('express');
const routers = express.Router();
const authMiddleware = require('../middlewares/auth');

routers.use('/user', userRouters);
routers.use('/payment', paymentsRouters);
routers.use('/tests', testsRouters);
routers.use('/products', productsRouters);
routers.use('/services', servicesRouters);
routers.use('/auth', authRouter);
routers.use('/sales', salesRouters);
// . . . Rotas abaixo necessitam de authenticação . . .
// routers.use(authMiddleware);
routers.use('/clients', clientsRouters);
routers.use('/schedule', scheduleRouters);


module.exports = routers