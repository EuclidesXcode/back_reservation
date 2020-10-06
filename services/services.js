const services = require('../models/services');

const servicesService = {
    getAll: async (req, res) => {
        const { page } = req.body;
        console.log("entrei na rota do produto")
        try {
            const count = await services.countDocuments('services');
            const countPage = page - 1
            const limit = 10;
            const skip = (limit * countPage - 1) + 1  

            const items = await services.find().skip(skip).limit(limit);
            console.log("items serviços: ", items);
            res.json({items, total: count}).status(200);
        } catch (error) {
            res.json(error).status(500);
        }
    },
    create: async (req, res) => {
        const payload = req.body;
        console.log("enviei serviço: ", payload);
        try {
            if (!payload.name || !payload.price) throw { msg: 'Dados inválidos', status: 400 };


            const data = await services.create(payload)
            console.log("data montado: ", data);
            res.json(data).status(201);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        console.log("entrou para deletar o id: ", id);
        try {
            if (!id) throw { msg: 'Id não informado', status: 400 }
            const data = await services.remove({ _id: id })
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
            
            const data = await services.updateOne({ _id: id }, payload, { multi: false })
            res.json(data).status(204);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    }
}

module.exports = servicesService