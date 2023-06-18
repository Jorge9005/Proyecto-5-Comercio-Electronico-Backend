const { response, request } = require('express');
const Producto = require('../models/producto.model');

//Aquí se tienen que definir req y res porque estamos importándolo desde express
const productosGet = async (req = request, res = response) => {
    try {
        const productosLista = await Producto.find();

        res.status(200).json({
            msg: "Listado de productos",
            detalle: productosLista
        });

    } catch (error) {
        res.status(400).json({
            msg: "No se pudo listar los productos",
            detalle: error.message
        });
    }
}

const productosPost = async (req = request, res = response) => {
    try {
        const body = req.body;
        let producto = new Producto(body);
        await producto.save();

        res.status(201).json({
            msg: "El producto se agregó correctamente",
            detalle: producto
        });

    } catch (error) {
        res.status(400).json({
            msg: "No se agregó el producto",
            detalle: error.message
        });
    }
}

const productosPut = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const actualizarProducto = await Producto.findByIdAndUpdate(id, body);

        res.status(200).json({
            msg: "El producto se actualizó",
            detalle: actualizarProducto
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error al actualizar el producto",
            detalle: error.mesasage
        });
    }
}

const productosDelete = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        await Producto.findByIdAndDelete(id);

        res.status(200).json({
            msg: "El producto se eliminó",
            detalle: null
        });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo eliminar el producto",
            detalle: error.message
        });
    }
}

const productosPremium = async (req = request, res = response) => {
    res.status(200).json({
        msg: "Si ves esto eres un usuario logeado en el sistema.",
        detalle: null
    });
}

module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete,
    productosPremium
}