const { clientes } = require('../../controllers/admin/clientes.js');
const { Router } = require('express');
const router = Router();


router.post('/clientes', clientes)


module.exports = router;
