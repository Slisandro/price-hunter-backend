const { EditDesafio } = require('../controllers/editdesafio');
const { Router } = require('express');
const router = Router();
const { auth, auth_cliente } = require('../midelwares/auth')
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/paises', auth, paises) 

// no es necesario agregar auth.

router.put('/editdesafio', auth_cliente, EditDesafio) 


module.exports = router;