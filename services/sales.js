const schedule = require('../models/schedule');
const clients = require('../models/clients');

const salesProductsService = {
    getAll: async (req, res) => {
        const (page) = req.body;
        try {
            const count = await sales.countDocuments('sales');
            const countPage = page - 1;
            const limit = 10;
            const skip = (limit * countPage - 1) + 1;

            const items = await sales.find().skip(skip).limit(limit);
            console.log("o que eu to enviando de vemdas de produtos")

        },
        // filter: async(req, res) => {
        //     const ()
        // }
    }


}