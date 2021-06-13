const { subcategoria } = require('../controllers/subcategoria.js');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/subcategoria/:id', middlerware, subcategoria) 

router.get('/subcategoria/:id', subcategoria)


module.exports = router;