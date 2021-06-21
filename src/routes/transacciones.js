const { transacciones, retiraPuntos } = require('../controllers/transacciones');
const { Router } = require('express');
const router = Router();
const {auth} = require('../midelwares/auth')
//agregar middlerware para la restricción, para que este logeado 
// router.get('/transacciones', auth, transacciones) 



router.post('/transacciones/retirapuntos', auth, retiraPuntos)
router.get('/transacciones/consulta', auth, transacciones) 



module.exports = router;