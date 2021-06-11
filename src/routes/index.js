const { Router } = require('express');
const productos = require("./productos")
const usuarios = require('./usuarios');

const router = Router();

router.use('/', productos)
router.use('/', usuarios)


module.exports = router;
