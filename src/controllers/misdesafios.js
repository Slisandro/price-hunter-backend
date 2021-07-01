const { Desafios } = require('../db');
const { Op } = require("sequelize");
// const {OAuth2Client} = require('google-auth-library');



async function Misdesafios(req, res, next) {
    const obj = req.query
    console.log(obj)
    const idCliente = req.cliente.id

    //-----fecha de hoy-------//
    const fecha_js = new Date();
    const dia = fecha_js.getDate();
    const mes = (fecha_js.getMonth() +1)*100;
    const año = fecha_js.getUTCFullYear()*1000;
    const fecha_hoy = dia+mes+año;

    const desafios_filter = []

    
    try {
        const desafios = await Desafios.findAll({
            where:{
                clienteId: idCliente
            }
        })

        //------agregamos fecha_inicial_num y fecha_final_num---------//
        const array = [];
        desafios.forEach((desafio)=>{
            const año_des = (parseInt(desafio.fecha_final.slice(0,2))+2000)*1000;
            const mes_des = parseInt( desafio.fecha_final.slice(3,5) )*100;
            const dia_des = parseInt( desafio.fecha_final.slice(6,8) );
            const fecha_final_desafio = año_des + mes_des + dia_des;

            const año_des_inic = (parseInt(desafio.fecha_inicial.slice(0,2))+2000)*1000;
            const mes_des_inic = parseInt( desafio.fecha_inicial.slice(3,5) )*100;
            const dia_des_inic = parseInt( desafio.fecha_inicial.slice(6,8) );
            const fecha_inicial_desafio = año_des_inic + mes_des_inic + dia_des_inic;

            array.push({
                ...desafio.dataValues,
                fecha_final_desafio,
                fecha_inicial_desafio,
            })
        })
        //--------------------------------------------------------//



        if( obj.estado!=="undefined" && obj.estado!=="" ){

            if(obj.estado==="finalizados"){
                array.forEach((desafio)=>{
                    if( desafio.fecha_final_desafio < fecha_hoy ){
                        desafios_filter.push(desafio);
                    }
                })
                if(  obj.orden!=="undefined" && obj.orden!=="" ){
                    console.log("entre 1")///
                    if( obj.orden==="asc" ){
                        console.log("entre 2")///
                        desafios_filter.sort((a,b)=>{
                            return a.fecha_final_desafio - b.fecha_final_desafio
                        })
                        console.log(desafios_filter)///
                        return res.send(desafios_filter);
                    }else{
                        desafios_filter.sort((a,b)=>{
                            return b.fecha_final_desafio - a.fecha_final_desafio
                        })
                        return res.send(desafios_filter);
                    }
                }else{
                    return res.send(desafios_filter);
                }
                
            }

            if( obj.estado==="activos" ){
                array.forEach((desafio)=>{
                    if( (fecha_hoy>=desafio.fecha_inicial_desafio) && (fecha_hoy<=desafio.fecha_final_desafio) ){
                        desafios_filter.push(desafio);
                    }
                })
                if(  obj.orden!=="undefined" && obj.orden!=="" ){
                    console.log("entre 1")///
                    if( obj.orden==="asc" ){
                        console.log("entre 2")///
                        desafios_filter.sort((a,b)=>{
                            return a.fecha_final_desafio - b.fecha_final_desafio
                        })
                        console.log(desafios_filter)///
                        return res.send(desafios_filter);
                    }else{
                        desafios_filter.sort((a,b)=>{
                            return b.fecha_final_desafio - a.fecha_final_desafio
                        })
                        return res.send(desafios_filter);
                    }
                }else{
                    return res.send(desafios_filter);
                }
            }

            if( obj.estado==="programados" ){
                array.forEach((desafio)=>{
                    if( desafio.fecha_inicial_desafio > fecha_hoy ){
                        desafios_filter.push(desafio);
                    }
                })
                if(  obj.orden!=="undefined" && obj.orden!=="" ){
                    console.log("entre 1")///
                    if( obj.orden==="asc" ){
                        console.log("entre 2")///
                        desafios_filter.sort((a,b)=>{
                            return a.fecha_final_desafio - b.fecha_final_desafio
                        })
                        console.log(desafios_filter)///
                        return res.send(desafios_filter);
                    }else{
                        desafios_filter.sort((a,b)=>{
                            return b.fecha_final_desafio - a.fecha_final_desafio
                        })
                        return res.send(desafios_filter);
                    }
                }else{
                    return res.send(desafios_filter);
                }
            }


        }else{
            return res.send(desafios);
        }
        

    } catch (error) {
        next(error)
    }
}


module.exports = {
    Misdesafios,
};