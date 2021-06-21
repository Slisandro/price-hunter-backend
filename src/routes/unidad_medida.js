const { unidad_medida } = require('../controllers/unidad_medida');
const { Router } = require('express');
const router = Router();

const { auth_cliente } = require('../midelwares/auth');

//agregar middlerware para la restricción, para que este logeado 
//router.get('/unidadmedida', auth, unidad_medida) 

// se agregar auth ?, no son necesarios mas cambios.

router.get('/unidadmedida', auth_cliente, unidad_medida) 


module.exports = router;