
const { productos } = require('../controllers/productos');
const { Router } = require('express');
const router = Router();


router.use('/productos', productos)


module.exports = router;