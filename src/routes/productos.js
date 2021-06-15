
const { productos } = require('../controllers/productos');
const { Router } = require('express');
const router = Router();
const { auth } = require('../midelwares/auth')
const { restriccion } = require('../midelwares/police')
//agregar middlerware para la restricción, para que este logeado 
router.get('/productos', auth, restriccion, productos)

// router.use('/productos', productos)


module.exports = router;