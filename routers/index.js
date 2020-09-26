const clientsRouters = require('./clients');
const testsRouters = require('./tests');
const methodsPaymentsRouters = require('./methodsPayment');
const scheduleRouters = require('./schedule');
const userRouters = require('./user');
const authRouter = require('./auth');
const express = require('express');
const routers = express.Router();
const authMiddleware = require('../middlewares/auth');

routers.use('/user', userRouters);
routers.use('/methodsPayments', methodsPaymentsRouters);
routers.use('/tests', testsRouters);
routers.use('/auth', authRouter);
// . . . Rotas abaixo necessitam de authenticação . . .
routers.use(authMiddleware);
routers.use('/clients', clientsRouters);
routers.use('/schedule', scheduleRouters);


module.exports = routers