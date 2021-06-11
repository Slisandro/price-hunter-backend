const { monedas } = require('../controllers/monedas');
const { Router } = require('express');
const router = Router();


router.get('/monedas', monedas) 


module.exports = router;