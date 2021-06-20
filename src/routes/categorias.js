const { categorias } = require('../controllers/categorias');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/categorias', auth, categorias) 

// se puede agregar auth, no son necesarios mas cambios.

router.get('/categorias', categorias) 


module.exports = router;