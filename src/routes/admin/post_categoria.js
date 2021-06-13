const { categoria } = require("../../controllers/admin/categoria.js");
const { Router } = require("express");
const router = Router();

// Ruta: http://localhost:3001/admin/categoria

router.post("/categoria", categoria);

module.exports = router;
