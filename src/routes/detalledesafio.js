
const { DetalleDesafio } = require('../controllers/detallesdesafios');
const { Router } = require('express');
const router = Router();
const {auth} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/detalledesafio', auth, generos) 

// se puede agregar auth, no son necesarios mas cambios.

router.get('/detalledesafio',  auth, DetalleDesafio) 

module.exports = router;