const { ciudades } = require('../controllers/ciudades');
const { Router } = require('express');
const router = Router();
// const middlerware = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/ciudades/:id', middlerware, ciudades) 

router.use('/ciudades/:id', ciudades)
// router.use('/ciudades', ciudades)



module.exports = router;