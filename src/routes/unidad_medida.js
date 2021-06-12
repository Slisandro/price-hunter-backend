const { unidad_medida } = require('../controllers/unidad_medida');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/unidadmedida', middlerware, unidad_medida) 

router.get('/unidadmedida', unidad_medida) 


module.exports = router;