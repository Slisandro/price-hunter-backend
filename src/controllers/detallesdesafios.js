const {Desafios, Ciudad} = require('../db');

async function DetalleDesafio (req, res, next){
    
    try {
        const desafios_detalles = await Desafios.findAll({
            include:{
                model: Ciudad,
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