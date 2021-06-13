const { Post_Producto } = require('../controllers/crearproducto');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/productos', middlerware, productos) 

router.use('/crearproducto', Post_Producto)


module.exports = router;