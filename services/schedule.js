const schedule = require('../models/schedule');
const clients = require('../models/clients');
const methods = require('../methods');

const scheduleService = {
    getAll: async (req, res) => {
        const { page } = req.body;
        try {
            const count = await schedule.countDocuments('schedule');
            const countPage = page - 1
            const limit = 10;
            const skip = (limit * countPage - 1) + 1  

            const items = await schedule.find().skip(skip).limit(limit);

            res.json({items, total: count}).status(200);
        } catch (error) {
            res.json(error).status(500);
        }
    },
    filter: async (req, res) => {
        const { name, babyName, cpf, numberRegistration, celNumber } = req.body;
        try {
          if (name) {
            const data = await clients.find({
              name: { $regex: new RegExp(name), $options: "i" },
            });
            res.json(data).status(200);
          } else if (babyName) {
            const data = await clients.find({
              babyName: { $regex: new RegExp(babyName), $options: "i" },
            });
            res.json(data).status(200);
          } else if (cpf) {
            const data = await clients.find({
              cpf: { $regex: new RegExp(cpf), $options: "i" },
            });
            res.json(data).status(200);
          } else if (numberRegistration) {
            const data = await clients.find({
              numberRegistration: {
                $regex: new RegExp(numberRegistration),
                $options: "i",
              },
            });
            res.json(data).status(200);
          } else if (celNumber) {
            const data = await clients.find({
              celNumber: { $regex: new RegExp(celNumber), $options: "i" },
            });
            res.json(data).status(200);
          } else {
            const data = await clients.find();
            res.json(data).status(200);
          }
        } catch (error) {
          res.json(error).status(500);
        }
    },
    save: async (req, res) => {
        const payload = req.body;
        try {
            if (!payload.clientId || !payload.testId || !payload.paymentId || !payload.testDates.length) throw { msg: 'Dados inválidos', status: 400 };


            const data = await schedule.create(payload)
            res.json(data).status(201);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            if (!id) throw { msg: 'Id não informado', status: 400 }
            const data = await schedule.remove({ _id: id })
            res.json(data).status(204);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    },
    update: async (req, res) => {
        const payload = req.body;
        const { id } = req.params
        try {
            if (!payload) throw { msg: 'Dados inválidos', status: 400 }
            
            const data = await schedule.updateOne({ _id: id }, payload, { multi: false })
            res.json(data).status(204);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    }
}

module.exports = scheduleService