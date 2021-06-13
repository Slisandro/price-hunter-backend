const { genero } = require("../../controllers/admin/genero.js");
const { Router } = require("express");
const router = Router();

// Ruta: http://localhost:3001/admin/genero

router.post("/genero", genero);

module.exports = router;
