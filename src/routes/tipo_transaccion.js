const { tipo_transacciones } = require('../controllers/tipo_transaccion');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/tipotransacciones', auth, tipo_transacciones) 

// se agregar auth ?, no son necesarios mas cambios.


router.get('/tipotransacciones', tipo_transacciones) 


module.exports = router;