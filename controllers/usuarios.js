const { logUser } = require('../db/consultas');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'SECRETO';

const loginUsuario = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await logUser({ username, password });
        const token = jwt.sign( user, JWT_SECRET );
        
        return req.status(200).json(token);

    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
};

module.exports = { loginUsuario };