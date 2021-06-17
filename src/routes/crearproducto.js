const { Post_Producto } = require('../controllers/crearproducto');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/productos', auth, productos) 

// se puede agregar auth, no son necesarios mas cambios.

router.post('/crearproducto', Post_Producto)


module.exports = router;