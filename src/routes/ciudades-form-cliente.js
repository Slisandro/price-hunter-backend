//----ruta para listar las ciudades en el form del cliente (crear desafio)----//


const { ListarCiudades } = require('../controllers/ListarCiudades');
const { Router } = require('express');
const router = Router();
const { auth } = require('../midelwares/auth')
const { restriccion } = require('../midelwares/police')
//agregar middlerware para la restricción, para que este logeado 
// router.get('/listarproductos', auth, restriccion, ListarProductos)
router.get('/listarciudades', ListarCiudades);



module.exports = router;