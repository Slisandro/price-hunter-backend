const {Productos, Precio, Desafios} = require('../db'); //fijarnos el nombre con que lo pone pablo.
const axios = require ("axios");
const { Op } = require("sequelize");
// function productos(req,res,next){

//     const nombre_input = req.query.name;  
//     if(nombre_input !== undefined){
//     Productos.findAll()
//     .then(r =>{
//         let array = []
//         for(let i=0; i<r.length; i++){
//             if(r[i].nombre.includes(nombre_input.toLowerCase())){
//                 array.push({
//                     nombre:r[i].nombre
//                     // precio:???????????????????????
//                 })
//             }
//         }
//         res.send(array)
//     })} else {
//         Productos.findAll()
//     .then(r =>{
//         res.send(r)
//     })}

// }

function productos(req,res,next){
    const array_desafios=[]
    const nombre_input = req.query.name;  
    if(nombre_input!==undefined){

        const nombre_min = nombre_input.toLowerCase();
        Productos.findAll({
            where:{
                nombre:{
                    [Op.substring]: `${nombre_min}`
                }
            },
            attributes:["nombre"], 
            include:  Desafios
            // {
            //     model: Desafios,
            //     attributes:["nombre_desafio"],
            //     through: {
            //         attributes: []
            //     },
            // }
        })
        .then((respuesta)=>{
            res.send(respuesta)
            // respuesta.forEach( async producto => {
            //     const desafios = await Desafios.findAll({
            //         where:{
            //             productoId: producto.id
            //         },
            //         attributes:["nombre_desafio"], 
            //         include: {
            //             model: Productos,
            //             attributes: ["nombre","contenido_neto"],
            //             through: {
            //               attributes: []
            //             },
            //         }
            //     })
            //     if(desafios.length>0){
            //         array_desafios.push(desafios)
            //     }
            // });
            
        })
        .catch((err)=>{next(err)});
        
        // res.send(array_desafios)
                
    } else {
        res.send('pasar un valor de busqueda')
    }

}

module.exports = {
productos,
};