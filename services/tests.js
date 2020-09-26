const tests = require('../models/tests');
const methods = require('../methods');

const testsService = {
    getAll: async (req, res) => {
        const { page } = req.body;
        try {
            const count = await tests.countDocuments('tests');
            const countPage = page - 1
            const limit = 10;
            const skip = (limit * countPage - 1) + 1  

            const items = await tests.find().skip(skip).limit(limit);

            res.json({items, total: count}).status(200);
        } catch (error) {
            res.json(error).status(500);
        }
    },
    save: async (req, res) => {
        const payload = req.body;
        try {
            if (!payload.name) throw { msg: 'Dados inválidos', status: 400 };


            const data = await tests.create(payload)
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
            const data = await tests.remove({ _id: id })
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
            if (!payload.name) throw { msg: 'Dados inválidos', status: 400 }
            
            const data = await tests.updateOne({ _id: id }, payload, { multi: false })
            res.json(data).status(204);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    }
}

module.exports = testsService