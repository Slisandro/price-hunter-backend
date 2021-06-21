//----ruta para listar las ciudades en el form del cliente (crear desafio)----//


const { ListarCiudades } = require('../controllers/ListarCiudades');
const { Router } = require('express');
const router = Router();
const { auth, auth_cliente } = require('../midelwares/auth')
const { restriccion } = require('../midelwares/police')
//agregar middlerware para la restricción, para que este logeado 
// router.get('/listarproductos', auth, restriccion, ListarProductos)
router.get('/listarciudades', auth_cliente, ListarCiudades);



module.exports = router;