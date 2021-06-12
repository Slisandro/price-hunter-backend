const { desafio } = require('../../controllers/admin/desafio.js');
const { Router } = require('express');
const router = Router();


router.post('/desafio', desafio)


module.exports = router;