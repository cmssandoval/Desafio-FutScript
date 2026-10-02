const jwt = require('jsonwebtoken');
const { secretKey } = require('../utils');

const validarToken = ( req, res, next ) => {
    const token = req.headers.authorization?.split(" ")[1];
    if ( !token ) return res.status(401).json({ error: 'No token provided' });

    try {
        const payload = jwt.verify( token, secretKey );
        req.payload = payload;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = { validarToken };