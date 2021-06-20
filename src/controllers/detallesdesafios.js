const {Desafios, Ciudad} = require('../db');

async function DetalleDesafio (req, res, next){
    idciudad = req.user.ciudadId
    // return res.send(req.user)
    
    try {
        const desafios_detalles = await Desafios.findAll({
            include:{
                model: Ciudad,
                where:{
                    id: idciudad,
                }
            }
        })

        res.send(desafios_detalles);
        
    } catch (error) {
        next(error);
    }


}

module.exports = {
    DetalleDesafio,
};