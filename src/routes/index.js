const { Router } = require('express');
const router = Router();
const Productos = require("./productos")


router.use('/', Productos)


module.exports = router;
