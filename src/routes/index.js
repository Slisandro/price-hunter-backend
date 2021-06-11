const { Router } = require('express');
const productos = require("./productos")
const subcategoria = require('./subcategoria.js')

const router = Router();

router.use('/', productos)
router.use('/', subcategoria)


module.exports = router;
