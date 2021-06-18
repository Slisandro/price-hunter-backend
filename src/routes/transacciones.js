const { transacciones, retiraPuntos } = require('../controllers/transacciones');
const { Router } = require('express');
const router = Router();
// const {auth} = require('../middlewares/auth')
//agregar middlerware para la restricción, para que este logeado 
//router.get('/transacciones', auth, transacciones) 

// se agregar auth ?, no son necesarios mas cambios.

router.post('/transacciones/retirapuntos', retiraPuntos)
router.get('/transacciones/consulta/:id', transacciones) 



module.exports = router;