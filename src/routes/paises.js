const { paises } = require('../controllers/paises');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/paises', auth, paises) 

// no es necesario agregar auth.

router.get('/paises', paises) 


module.exports = router;