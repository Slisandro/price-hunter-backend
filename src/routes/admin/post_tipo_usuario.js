const { tipo_usuario } = require('../../controllers/admin/tipo_usuario');
const { Router } = require('express');
const router = Router();


router.post('/tipoUsuario', tipo_usuario)


module.exports = router;