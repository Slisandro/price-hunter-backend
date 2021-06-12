const { tipo_transacciones } = require('../controllers/tipo_transaccion');
const { Router } = require('express');
const router = Router();


router.get('/tipotransacciones', tipo_transacciones) 


module.exports = router;