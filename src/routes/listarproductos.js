//----ruta para listar los productos en el form del cliente----//


const { ListarProductos } = require('../controllers/listarproductos');
const { Router } = require('express');
const router = Router();
const { auth, auth_cliente } = require('../midelwares/auth')
const { restriccion } = require('../midelwares/police')
//agregar middlerware para la restricción, para que este logeado 
// router.get('/listarproductos', auth, restriccion, ListarProductos)
router.get('/listarproductos', auth_cliente,  ListarProductos)



module.exports = router;