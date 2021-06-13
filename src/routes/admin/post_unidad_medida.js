const { um } = require("../../controllers/admin/unidad_medida");
const { Router } = require("express");
const router = Router();

// Ruta: http://localhost:3001/admin/um

router.post("/um", um);

module.exports = router;
