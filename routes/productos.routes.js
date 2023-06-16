const { Router } = require('express');
const router = Router();
const {productosGet, productosPost, productosPut, productosDelete} = require('../controllers/productos.controller');
const chToken = require('../middlewares/auth.middleware')


router.get("/productos", productosGet);
router.post("/productos", productosPost);
router.get("/producto/:id", productosPut);
router.get("/productos/:id", productosDelete);


module.exports = router;