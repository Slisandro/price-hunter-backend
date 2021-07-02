const {Desafios} = require('../db');
const {procesaGoogle, fraccionarApiGoogle, fechaContraHoy} = require('../../config/funciones_publicas');
// const { where } = require('sequelize/types');
const { Op } = require("sequelize");


async function EditDesafio (req, res, next){
   
    const id_cliente = req.cliente.id
    const id_desafio = req.body.id;
    const fecha_final_nueva = req.body.fechafinal.slice(2,10)
    const desclipcion_nueva = req.body.descripcion

    try {

        if( !id_cliente || !id_desafio ){
            res.json({msg:"Se requieren identificadores (IDs cliente y desafio)."})
        }

        if( (!fecha_final_nueva && !desclipcion_nueva) || ( fecha_final_nueva==="" && desclipcion_nueva==="" ) ){
            res.json({msg:"Se requiere minimamente de una fecha o descripción nueva para realizar un cambio."})
        }
        
        const desafio = await Desafios.findAll({
            where: {
                id: id_desafio,
                clienteId: id_cliente
            }
        })

        if(desafio){
            let parametros = {};
            if(fecha_final_nueva){
                parametros.fecha_final = fecha_final_nueva;
            }
            if( desclipcion_nueva ){
                parametros.descripcion_desafio = desclipcion_nueva;
            }
           
            await Desafios.update(parametros, {
                where: {
                  id: id_desafio,
                  clienteId: id_cliente
                },
            });

            res.json({msg:"Se realizaron los cambios correspondientes. Puede visualizarlo en su lsita de desafios."})

        }else{
            res.json({msg:"No existe el desafio que se quiere modificar."});
        }

    } catch (error) {
        next(error)
    }

}

module.exports = {
    EditDesafio,
};