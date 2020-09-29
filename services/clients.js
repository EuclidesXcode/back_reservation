const clients = require("../models/clients");
const schedule = require("../models/schedule");
const methods = require("../methods");

const statesService = {
  getAll: async (req, res) => {
    const { page, noLimit } = req.body;
    console.log("noLimit: ", noLimit);
    try {
      if (!noLimit) {
        console.log("entrou no try: ")
        const count = await clients.countDocuments("clients");
        const countPage = page - 1;
        const limit = 10;
        const skip = limit * countPage - 1 + 1;

        const items = await clients
          .find()
          .skip(skip)
          .limit(limit);
        console.log("items: ", items);
        res.json({ items, total: count }).status(200);
      } else {
        const items = await clients.find();

        res.json({ items }).status(200);
      }
    } catch (error) {
      console.log("entrou no catch: ")
      res.json(error).status(500);
    }
  },
  filter: async (req, res) => {
    const { name, babyName, cpf, celPhone } = req.body;
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
      } else if (celPhone) {
        const data = await clients.find({
          celPhone: { $regex: new RegExp(celPhone), $options: "i" },
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
  create: async (req, res) => {
    const payload = req.body;
    console.log("recebi o payload: ", payload);
    try {
      if (
        !payload.codNumber ||
        !payload.name ||
        !payload.babyName ||
        !payload.cpf
      )
        throw { msg: "Dados inválidos", status: 400 };
      // const existsClient = await states.findOne({ cpf: payload.cpf });

      // if (existsClient)
      //   throw { msg: "Cliente já existe no sistema", status: 400 };

      const data = await states.create(payload);
      console.log("enviou o cliente: ", data);
      res.json(data).status(201);
    } catch (error) {
      if (error.status) res.status(error.status).json(error.msg);
      else res.json(error).status(500);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const clientExists = await clients.find({ _id: id });
      if (!clientExists.length)
        throw {
          msg: "Cliente não existe",
          status: 400,
        };

      if (!id) throw { msg: "Id não informado", status: 400 };
      const data = await clients.remove({ _id: id });
      res.json(data).status(204);
    } catch (error) {
      if (error.status) res.status(error.status).json(error.msg);
      else res.json(error).status(500);
    }
  },
  update: async (req, res) => {
    const payload = req.body;
    const { id } = req.params;
    try {
      if (!id) throw { msg: "Id inválidos", status: 400 };

      const existsClient = await clients.findOne({ _id: id });

      if (!existsClient) throw { msg: "Cliente não existe", status: 400 };

      const data = await clients.updateOne({ _id: id }, payload, {
        multi: false,
      });
      res.json(data).status(204);
    } catch (error) {
      if (error.status) res.status(error.status).json(error.msg);
      else res.json(error).status(500);
    }
  },
};

module.exports = statesService;
