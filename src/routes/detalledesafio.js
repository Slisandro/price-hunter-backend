
const { DetalleDesafio } = require('../controllers/detallesdesafios');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/generos', middlerware, generos) 

router.get('/detalledesafio', DetalleDesafio) 

module.exports = router;