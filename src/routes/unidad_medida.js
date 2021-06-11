const { unidad_medida } = require('../controllers/unidad_medida');
const { Router } = require('express');
const router = Router();


router.get('/unidadmedida', unidad_medida) 


module.exports = router;