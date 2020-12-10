const sales = require('../models/sales');

const salesService = {
    getAll: async (req, res) => {
        const { page } = req.body;
        try {
            const count = await sales.countDocuments('sales');
            const countPage = page - 1
            const limit = 10;
            const skip = (limit * countPage - 1) + 1  

            const items = await sales.find().skip(skip).limit(limit);
            console.log("items sale: ", items);
            res.json({items, total: count}).status(200);
        } catch (error) {
            res.json(error).status(500);
        }
    },
    create: async (req, res) => {
        const payload = req.body;

        try {
            payload.status = 1;
            payload.statusText = 'Concluida'
            if(!payload.idClient) {
             if(payload.products.length > 0) {
                const data = await sales.create(payload)
                res.json(data).status(201);
                return;
             }
             throw { msg: 'Nenhum produto informado', status: 400 }
            }
            if(payload.idClient) {
                if(payload.products.length > 0 || payload.services.length > 0) {
                    const data = await sales.create(payload)
                    res.json(data).status(201);
                    return;
                 } 
                 throw { msg: 'Nenhum produto ou serviço informado', status: 400 }
            }
        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            if (!id) throw { msg: 'ID não informado', status: 400 }
            const item = await sales.findOne({_id: id})
            item.status = 0;
            item.statusText = "Cancelada"
            const data = await sales.updateOne({ _id: id }, item, { multi: false })
            res.json(data).status(204);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    }
}

module.exports = salesService