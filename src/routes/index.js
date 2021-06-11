const { Router } = require('express');
const productos = require("./productos")
const categorias = require("./categorias")
const subcategoria = require('./subcategoria.js')
const usuarios = require('./usuarios');
// const clientes = require('./clientes')

const router = Router();

router.use('/', productos)
router.use('/categorias', categorias)
router.use('/', subcategoria)
router.use('/', usuarios)
// router.use('/', clientes)


module.exports = router;
