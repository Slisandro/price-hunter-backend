const { addPrecio } = require('../controllers/precios');
const { Router } = require('express');
const router = Router();
//esta es protección  de rutas
const {auth} = require('../midelwares/auth')

///proteger la ruta
router.post('/precios', auth, addPrecio )




module.exports = router;