const { ciudades } = require('../controllers/ciudades');
const { Router } = require('express');
const router = Router();


router.use('/ciudades/:id', ciudades)
// router.use('/ciudades', ciudades)



module.exports = router;