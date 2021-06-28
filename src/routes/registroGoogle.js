const { registroGoogle } = require('../controllers/registroGoogle');
const { Router } = require('express');
const { auth } = require('../midelwares/auth')
const router = Router();

router.put('/registro-google', auth, registroGoogle)


module.exports = router;