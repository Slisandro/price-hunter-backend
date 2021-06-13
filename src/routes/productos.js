
const { productos } = require('../controllers/productos');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
// router.get('/productos', middlerware, productos) 

router.use('/productos', productos)


module.exports = router;