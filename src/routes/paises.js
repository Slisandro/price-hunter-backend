const { paises } = require('../controllers/paises');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/paises', middlerware, paises) 

router.get('/paises', paises) 


module.exports = router;