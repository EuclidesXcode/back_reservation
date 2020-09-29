const user = require('../models/user');
const bcrypt = require('bcrypt')

const encryptPassword = async password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}
  
const userService = {
    getAll: async (req, res) => {
        const { page, noLimit } = req.body;
        console.log(noLimit)
        try {
          if (!noLimit) {
            const count = await user.countDocuments("user");
            const countPage = page - 1;
            const limit = 10;
            const skip = limit * countPage - 1 + 1;
    
            const items = await user
              .find()
              .skip(skip)
              .limit(limit);
    
            res.json({ items, total: count }).status(200);
          } else {
            const items = await user.find();
    
            res.json({ items }).status(200);
          }
        } catch (error) {
          res.json(error).status(500);
        }
      },
    create: async (req, res) => {
        const payload = req.body;
        try {
            if (!payload.email || !payload.password) throw { msg: 'Dados inválidos', status: 400 }

            const newUser = {
                name: payload.name,
                email: payload.email,
                password: await encryptPassword(payload.password),
            }

            const existsUser = await user.findOne({ email: newUser.email })
            if (existsUser) throw { msg: 'Usuário já existe no sistema', status: 400 }

            const data = await user.create(newUser)

            res.json({items: {email: data.email, msg: 'Criado com sucesso'}}).status(201);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            if (!id) throw { msg: 'Id não informado', status: 400 }
            const data = await user.remove({ _id: id })
            res.json(data).status(204);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    },
    updatePass: async (req, res) => {
        const payload = req.body;
        const { id } = req.params
        try {
            if (!id || !payload.password) throw { msg: 'Dados inválidos', status: 400 }

            const existsUser = await user.find({ _id: id })

            if (!existsUser.length) throw { msg: 'Usuário não encontrado', status: 400 }
            
            const data = await user.updateOne({ _id: id }, { password: await encryptPassword(payload.password)}, { multi: false })
            res.json(data).status(204);

        } catch (error) {
            if (error.status) res.status(error.status).json(error.msg)
            else res.json(error).status(500);
        }
    }
}

module.exports = userService