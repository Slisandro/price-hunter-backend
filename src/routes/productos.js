
const { productos } = require('../controllers/productos');
const { Router } = require('express');
const router = Router();
// const { restriccion } = require('../midelwares/police')
// router.get('/productos', auth, restriccion, productos) / solo para roles

// const { auth } = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
// router.get('/productos', auth, productos)

// se puede agregar auth, no son necesarios mas cambios.

router.use('/productos', productos)


module.exports = router;