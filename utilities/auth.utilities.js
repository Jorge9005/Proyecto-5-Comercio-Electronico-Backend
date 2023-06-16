const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

const generarToken = (data) => {
    return jwt.sign(
        {
            data
        },
        "firma-secreta",
        {
            expiresIn: '9h'
        }
    );
}

const validarToken = (token) => {
    return jwt.verify(token, "firma-secreta");
}

module.exports = {
    hashPassword,
    comparePassword,
    generarToken,
    validarToken
}