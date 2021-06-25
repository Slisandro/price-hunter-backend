const {Desafios, Ciudad, Paises} = require('../db');
const {procesaGoogle, fraccionarApiGoogle} = require('../../config/funciones_publicas');
// const { where } = require('sequelize/types');
const { Op } = require("sequelize");

/// Sacar desafios que ya cumplen por fecha o cantidad de precios

async function DetalleDesafio (req, res, next){
    // const idciudad = req.user.ciudadId
    const objGoogle = procesaGoogle(req.body)
    // return res.send(objGoogle)
    
    const [paisFront, nivel1Front, nivel2Front, nivel3Front] = fraccionarApiGoogle(objGoogle)
    // return res.send(paisFront, nivel1Front, nivel2Front, nivel3Front])
       
    try {
        const desafios_detalles = await Desafios.findAll({
            include:{
                model: Ciudad,
                where: {
                    ciudad:{
                        [Op.or]: [
                            {[Op.iLike]: nivel1Front},
                            {[Op.iLike]: nivel2Front},
                            {[Op.iLike]: nivel3Front},
                        ]
                    }
                },
                include:{
                    model:Paises,
                    where: {
                        nombre_pais: {
                            [Op.iLike]: paisFront
                        }
                    }
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