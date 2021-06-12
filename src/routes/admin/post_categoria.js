const { categoria } = require('../../controllers/admin/categoria.js');
const { Router } = require('express');
const router = Router();


router.post('/categoria', categoria)


module.exports = router;