const { Router } = require('express');
const router = Router();


router.use('/', (req,res,next)=>{
    return res.send("prueba");
})


module.exports = router;
