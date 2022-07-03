const users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const userService = {
    login: async (req, res) => {
        const { email, password } = req.body;
        console.log('[AUTH_LOG] Login recebido: %j %j', email, password)
        try {
            const user = await users.findOne({ email: email }).select('+password');

            console.log('[AUTH_LOG] Buscou no banco se exite o login: %j', user)

            if (!user) throw { msg: 'Usuário não existe', status: 400 };
            if (!bcrypt.compareSync(password, user.password)) throw { msg: 'Senha inválida', status: 400 };
            
            user.password = undefined;

            console.log('[AUTH_LOG] User final: %j', user)

            res.status(200).json({token: generateToken({id: user._id})})

        } catch (error) {
            console.log('[AUTH_ERROR_LOG] Error: ', error)
            if (error.status) {
                return res.status(error.status).json(error.msg) 
            } 
            return res.json(error).status(500);
        }
    }
}

const generateToken = (params = {}) => jwt.sign(params, authConfig.secret, {
    expiresIn: 18000
});

module.exports = userService