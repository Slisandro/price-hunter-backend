const { generos } = require('../controllers/genero');
const { Router } = require('express');
const router = Router();

router.get('/generos', generos) 

module.exports = router;