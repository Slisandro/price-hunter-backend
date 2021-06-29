const { EstadisticaCliente } = require('../controllers/estatisticas_cliente');
const { Router } = require('express');
const router = Router();
const {auth_cliente} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 

// se puede agregar auth, no son necesarios mas cambios.

router.get('/estadisticacliente/:id',  auth_cliente, EstadisticaCliente) 

module.exports = router;