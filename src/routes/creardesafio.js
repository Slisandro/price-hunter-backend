const { Post_Crear_Desafio } = require('../controllers/creardesafio');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/productos', middlerware, productos) 

router.post('/creardesafio', Post_Crear_Desafio)


module.exports = router;