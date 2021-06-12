const { subcategoria } = require('../controllers/subcategoria.js');
const { Router } = require('express');
const router = Router();


router.get('/subcategoria/:id', subcategoria)


module.exports = router;