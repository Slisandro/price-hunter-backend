const { Router } = require('express');
const productos = require("./productos")
const categorias = require("./categorias")
const subcategoria = require('./subcategoria.js')
const usuarios = require('./usuarios');
const generos = require('./genero');
const unidad_medida = require('./unidad_medida');
const tipo_usuario = require('./tipo_usuarios');
const paises = require('./paises');
const monedas = require('./monedas');
const ciudades = require('./ciudades');
const clientes = require('./clientes')
const categoriA = require('./admin/post_categoria')
const clienteS= require('./admin/post_clientes.js')
const desafioS= require('./admin/post_desafio')

const router = Router();

router.use('/', productos)
router.use('/', categorias)
router.use('/', subcategoria)
router.use('/', usuarios)
router.use('/', generos)
router.use('/', unidad_medida)
router.use('/', tipo_usuario)
router.use('/', paises)
router.use('/', monedas)
router.use('/', ciudades)
router.use('/', clientes)
router.use('/admin', categoriA)
router.use('/admin', clienteS)
router.use('/admin', desafioS)

module.exports = router;
