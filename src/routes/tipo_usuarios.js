const { tipo_usuario } = require('../controllers/tipo_usuario');
const { Router } = require('express');
const router = Router();


router.get('/tipousuario', tipo_usuario) 


module.exports = router;