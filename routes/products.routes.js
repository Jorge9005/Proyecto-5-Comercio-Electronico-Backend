const { Router } = require('express');
const router = Router();
const {productsGet} = require('../controllers/products.controller');

router.get("/productos", productsGet);

module.exports = router;