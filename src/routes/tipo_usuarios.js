const { tipo_usuario } = require('../controllers/tipo_usuario');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/tipousuario', middlerware, tipo_usuario) 

router.get('/tipousuario', tipo_usuario) 


module.exports = router;