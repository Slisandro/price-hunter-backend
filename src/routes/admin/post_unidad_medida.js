const { um } = require('../../controllers/admin/unidad_medida');
const { Router } = require('express');
const router = Router();


router.post('/um', um)


module.exports = router;