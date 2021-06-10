const { Router } = require('express');
const productos = require("./productos")

const router = Router();

router.use('/', productos)


module.exports = router;
