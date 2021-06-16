const { transacciones } = require('../controllers/transacciones');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/transacciones', auth, transacciones) 

// se agregar auth ?, no son necesarios mas cambios.

router.get('/transacciones', transacciones) 


module.exports = router;