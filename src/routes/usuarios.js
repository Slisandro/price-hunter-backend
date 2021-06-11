const { addUsuarios } = require('../controllers/usuarios');
const { Router } = require('express');
const router = Router();


router.post('/usuarios', addUsuarios)


module.exports = router;