const { ciudades } = require('../controllers/ciudades');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/ciudades/:id', auth, ciudades) 

// no es necesario agregar auth.

router.use('/ciudades/:id', ciudades)
// router.use('/ciudades', ciudades)



module.exports = router;