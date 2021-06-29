const { Misdesafios } = require('../controllers/misdesafios');
const { Router } = require('express');
const router = Router();
const {auth_cliente} = require('../midelwares/auth')
// const {auth} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/monedas', auth, monedas) 

// se puede agregar auth, no son necesarios mas cambios.

router.get('/misdesafios', auth_cliente, Misdesafios) 


module.exports = router;