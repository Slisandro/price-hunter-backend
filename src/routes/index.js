const { Router } = require('express');

const router = Router();


router.use('/', (req,res,next)=>{
    res.send("prueba").catch(e=>next(e))
})


module.exports = router;