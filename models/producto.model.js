const { Schema, model } = require('mongoose');

const productosSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio']
    },
    precio: {
        type: Number
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    },
    stock: {
        type: Number,
        required: [true, "El stock es obligatorio"]
    }
}, { versionkey: false });

module.exports = model('productos', productosSchema); //products es el nombre de la colleccion