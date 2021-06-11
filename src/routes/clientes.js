const { addClientes, logClientes } = require('../controllers/clientes');
const { Router } = require('express');
const router = Router();


router.post('/clientes/registro', addClientes)
router.post('/clientes/ingreso', logClientes)


module.exports = router;