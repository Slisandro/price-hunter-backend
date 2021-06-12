const { generos } = require('../controllers/genero');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/generos', middlerware, generos) 

router.get('/generos', generos) 

module.exports = router;