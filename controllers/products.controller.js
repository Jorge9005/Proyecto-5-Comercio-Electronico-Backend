const { response, request } = require('express');
const Product = require('../models/product.model');

//Aquí se tienen que definir req y res porque estamos importándolo desde express
const productsGet = async (req = request, res = response) => {
    try {
        const productsList = await Product.find();

        res.status(200).json({
            msg: "Listado de productos",
            detalle: productsList
        });

    } catch (error) {
        res.status(400).json({
            msg: "No se pudo listar los productos",
            detalle: error.message
        });
    }
}

module.exports = {
    productsGet
}