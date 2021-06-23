const {Desafios, Ciudad, Paises} = require('../db');
const {cambiaCaracteres} = require('../../config/funciones_publicas');
// const { where } = require('sequelize/types');
const { Op } = require("sequelize");





async function DetalleDesafio (req, res, next){
    const idciudad = req.user.ciudadId
    const objGoogle = procesaGoogle(req.body)
    const paisGoogle = objGoogle.find(arg => arg.type === 'pais');
    const nivel1Google =  objGoogle.find(arg => arg.type === 'nivel1');
    const nivel2Google = objGoogle.find(arg => arg.type === 'nivel2');
    const nivel3Google = objGoogle.find(arg => arg.type === 'nivel3');

    let paisFront = paisGoogle ? paisGoogle.long_name : '';
    let nivel1Front = nivel1Google ? nivel1Google.long_name : '';
    let nivel2Front = nivel2Google ? nivel2Google.long_name : '';
    let nivel3Front = nivel3Google ? nivel3Google.long_name : '';

    // return res.send([paisFront, nivel1Front, nivel2Front, nivel1Front])

       
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

function procesaGoogle (arr){
    let nuevoArray =[]
    let tipoDato = '';
    if (arr.length){
        for (let x = 0; x < arr.length; x++){
        let newName = cambiaCaracteres(arr[x].long_name).toLowerCase();
        let newShortName = cambiaCaracteres(arr[x].short_name).toLowerCase();
            if (arr[x].types[0] === 'country'){
                tipoDato = 'pais'
            }else if (arr[x].types[0] === 'administrative_area_level_1'){
                tipoDato = 'nivel1'
            }else if (arr[x].types[0] === 'administrative_area_level_2'){
                tipoDato = 'nivel2'
            }else if (arr[x].types[0] === 'locality'){
                tipoDato = 'nivel3'
            }
            nuevoArray.push(
                { 
                    long_name: newName,
                    short_name: newShortName,
                    type: tipoDato
                }
            )
        }
    }
    return nuevoArray;
}

module.exports = {
    DetalleDesafio,
    
};