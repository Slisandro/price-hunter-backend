const { ciudad } = require("../../controllers/admin/ciudad.js");
const { Router } = require("express");
const router = Router();

// Ruta: http://localhost:3001/admin/ciudad

router.post("/ciudad", ciudad);

module.exports = router;