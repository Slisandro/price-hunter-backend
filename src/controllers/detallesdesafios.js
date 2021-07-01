const {Desafios, Ciudad, Paises, Precio} = require('../db');
const {procesaGoogle, fraccionarApiGoogle, fechaContraHoy} = require('../../config/funciones_publicas');
// const { where } = require('sequelize/types');
const { Op } = require("sequelize");

/// Sacar desafios que ya cumplen por fecha o cantidad de precios

function DetalleDesafio (req, res, next){
    // const idciudad = req.user.ciudadId
    // console.log('reqbody',req.body)
    const objGoogle = procesaGoogle(req.body)
    // return res.send(objGoogle)
    // console.log(objGoogle)

    // [
    //     {
    //       "long_name": "Colombia",
    //       "short_name": "CO",
    //       "types": [ "country", "political" ]
    //     },
    //     {
    //       "long_name": "Bogotá",
    //       "short_name": "Bogotá",
    //       "types": [ "administrative_area_level_1", "political" ]
    //     },
    //     {
    //       "long_name": "Bogotá",
    //       "short_name": "Bogotá",
    //       "types": [ "locality", "political" ]
    //     }
    //   ]
    
    const [paisFront, nivel1Front, nivel2Front, nivel3Front] = fraccionarApiGoogle(objGoogle)
    // return res.send([paisFront, nivel1Front, nivel2Front, nivel3Front])
       
    Desafios.findAll({
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
    }).then((desafios_detalles)=>{
        // return res.send(desafios_detalles)
        //Validar que los desafios no hayan caducado para enviarlos al front
        //Validar que la cantidad de precios no exceda la solicitada por el cliente en 
        //cada ciudad.
        if (desafios_detalles.length){
            // return res.json(desafios_detalles)
            const idCiudad = desafios_detalles[0].ciudads[0].id;
            // console.log('idciudad', idCiudad)
            const desafiosActivos =[];

            Precio.findAll({
                attributes: ['id', 'latitud', 'longitud', 'precio', 'desafioId', 'usuarioId'],
                where:{
                  ciudadId: idCiudad
                },
                include:{
                  model: Ciudad,
                  attributes:['id', 'ciudad']
                }
    
              }).then((precios)=>{
                //   console.log(precios)
                //   return res.json(precios)
                // if (precios.length){
                if (precios){

                  for (let x=0; x<desafios_detalles.length;x++){
                      if (fechaContraHoy(desafios_detalles[x].fecha_final)){
                        //observar que precios coinciden con el desafio y la ciudad del precio
                        let preciosMax = desafios_detalles[x].ciudads[0].detalle.cantidad_precios
                        let preciosCapturados = precios.filter(arg => arg.desafioId === desafios_detalles[x].id)
                        // console.log(preciosMax)
                        // console.log(preciosCapturados.length)

                        if (preciosMax > preciosCapturados.length)
                          desafiosActivos.push(desafios_detalles[x])
                        }
                    }
                    
                    if(desafiosActivos.length){
                        return res.send(desafiosActivos)
                    }else{
                        return res.send({msg: 'no hay desafíos activos en tu ubicación' })
                    }
                    
                    
                    
                }
                return res.send(desafiosActivos);
            })
        }else{
            return res.send({msg: 'no hay desafíos cerca a tu ubicación' })
        }
    })       
}

module.exports = {
    DetalleDesafio,
    
};