const { categorias } = require('../controllers/categorias');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/categorias', middlerware, categorias) 

router.get('/categorias', categorias) 


module.exports = router;