const { response, request } = require('express');
const Usuario = require('../models/usuario.model');
const { hashPassword, comparePassword, generartoken } = require('../utilities/auth.utilities');

const usuariosGet = async (req = request, res = response) => {
    try {
        const usuariosLista = await Usuario.find();

        res.status(200).json({
            msg: "Listado de usuarios",
            detalle: usuariosLista
        });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo obtener la lista de los usuarios",
            detalle: error.message
        });
    }
}

const signUp = async (req = request, res = response => {
    try {
        const 
    } catch (error) {
        
    }
})