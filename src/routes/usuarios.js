const { addUsuarios, logUsuario } = require('../controllers/usuarios');
const { Router } = require('express');
const router = Router();


router.post('/usuarios/registro', addUsuarios)
router.post('/usuarios/ingreso', logUsuario)


module.exports = router;