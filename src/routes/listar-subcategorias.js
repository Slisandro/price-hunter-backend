const { ListarSubCategorias } = require('../controllers/listarsubcategorias');
const { Router } = require('express');
const router = Router();
//esta es protección  de rutas
const {auth, auth_cliente} = require('../midelwares/auth')

///proteger la ruta
router.get('/listarsubcategorias', auth_cliente, ListarSubCategorias )
// router.post('/listarsubcategorias', ListarSubCategorias,  )

module.exports = router;