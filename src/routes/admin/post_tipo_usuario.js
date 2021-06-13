const { tipo_usuario } = require("../../controllers/admin/tipo_usuario");
const { Router } = require("express");
const router = Router();

// Ruta : http://localhost:3001/admin/tipoUsuario

router.post("/tipoUsuario", tipo_usuario);

module.exports = router;
