const { tipo_usuario } = require('../controllers/tipo_usuario');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/tipousuario', auth, tipo_usuario) 

// se agregar auth ?, no son necesarios mas cambios.

router.get('/tipousuario', tipo_usuario) 


module.exports = router;