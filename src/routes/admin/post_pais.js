const { pais } = require("../../controllers/admin/pais.js");
const { Router } = require("express");
const router = Router();

// Ruta: http://localhost:3001/admin/pais

router.post("/pais", pais);

module.exports = router;