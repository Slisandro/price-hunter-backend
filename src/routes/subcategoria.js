const { subcategoria } = require('../controllers/subcategoria.js');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/subcategoria/:id', auth, subcategoria) 

// se puede agregar auth, son necesarios cambios.

router.get('/subcategoria/:id', subcategoria)


module.exports = router;