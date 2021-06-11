const { Router } = require('express');
const productos = require("./productos")
const subcategoria = require('./subcategoria.js')
const usuarios = require('./usuarios');

const router = Router();

router.use('/', productos)
router.use('/', subcategoria)
router.use('/', usuarios)


module.exports = router;
