const { transacciones } = require('../controllers/transacciones');
const { Router } = require('express');
const router = Router();


router.get('/transacciones', transacciones) 


module.exports = router;