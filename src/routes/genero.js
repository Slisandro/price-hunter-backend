const { generos } = require('../controllers/genero');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/generos', auth, generos) 

// no es necesario agregar auth.

router.get('/generos', generos) 

module.exports = router;