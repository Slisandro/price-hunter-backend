const { monedas } = require('../controllers/monedas');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/monedas', middlerware, monedas) 

router.get('/monedas', monedas) 


module.exports = router;