const { logIn } = require('../controllers/login');
const { Router } = require('express');
const router = Router();

router.post('/ingreso', logIn)


module.exports = router;