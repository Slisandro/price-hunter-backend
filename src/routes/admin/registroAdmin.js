const { addAdmin } = require('../../controllers/admin/registroAdmin');
const { Router } = require('express');
const router = Router();

router.post('/registro/admin', addAdmin)


module.exports = router;