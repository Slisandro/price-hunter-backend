
const { DetalleDesafio } = require('../controllers/detallesdesafios');
const { Router } = require('express');
const router = Router();
const {auth, authGoogleUsers} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 

// se puede agregar auth, no son necesarios mas cambios.

router.post('/detalledesafio',  auth, authGoogleUsers, DetalleDesafio) 

module.exports = router;