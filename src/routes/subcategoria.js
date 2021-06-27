const { subcategoria } = require('../controllers/subcategoria.js');
const { Router } = require('express');
const router = Router();
const {auth} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
// router.get('/subcategoria/:id', subcategoria)
//http://localhost:3001/subcategoria?id=84&long=-60.315329999999996&lat=-36.9122268&dis=10000

router.get('/subcategoria', auth, subcategoria) 

module.exports = router;