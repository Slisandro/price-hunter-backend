const { paises } = require('../controllers/paises');
const { Router } = require('express');
const router = Router();


router.get('/paises', paises) 


module.exports = router;