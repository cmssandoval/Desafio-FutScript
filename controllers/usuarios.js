const { logUser } = require('../db/consultas');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../utils');

const loginUsuario = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await logUser({ username, password });
        if ( user.message ) return res.status(400).json(user.message);
        const token = jwt.sign( user, secretKey );
        
        return req.status(200).json({token});

    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
};

module.exports = { loginUsuario };