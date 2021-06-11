const { categorias } = require('../controllers/categorias');
const { Router } = require('express');
const router = Router();


router.get('/', categorias) 


module.exports = router;