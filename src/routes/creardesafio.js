const { Post_Crear_Desafio } = require('../controllers/creardesafio');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/productos', auth, productos) 

// se puede agregar auth, es necesario utilizar el req.user.id 

router.post('/creardesafio', Post_Crear_Desafio)


module.exports = router;