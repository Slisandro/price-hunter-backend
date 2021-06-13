const { moneda } = require("../../controllers/admin/moneda.js");
const { Router } = require("express");
const router = Router();

// RUTA: http://localhost:3001/admin/moneda

router.post("/moneda", moneda);

module.exports = router;
