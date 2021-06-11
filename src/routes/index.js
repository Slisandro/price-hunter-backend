const { Router } = require('express');
const productos = require("./productos")
const categorias = require("./categorias")

const router = Router();

router.use('/', productos)
router.use('/categorias', categorias)


module.exports = router;
