const { monedas } = require('../controllers/monedas');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/monedas', auth, monedas) 

// se puede agregar auth, no son necesarios mas cambios.

router.get('/monedas', monedas) 


module.exports = router;