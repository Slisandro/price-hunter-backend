const { Productos,Clientes, Precio, Desafios } = require('../db'); //fijarnos el nombre con que lo pone pablo.
const axios = require("axios");
const { Op } = require("sequelize");
const { radioLatLong } = require('../../config/funciones_publicas');

function productos(req, res, next) {
    // console.log(req.user)
    const {lat, long, dis} = req.query;
    if (lat && long && dis) {
        const nombre_input = req.query.name;
        if (nombre_input !== undefined) {  
            const nombre_min = nombre_input.toLowerCase();
            Productos.findAll({
                attributes:['id', 'nombre', 'contenido_neto', 'unidadMedidaCodigoUnidadMedida'],
                where: {
                    nombre: {
                        [Op.substring]: `${nombre_min}`
                    }
                },
                include:{
                    model: Desafios,
                    attributes:['id','nombre_desafio', 'clienteId'],
                    include:[
                        {
                            model: Precio,
                            attributes:['precio', 'createdAt', 'latitud', 'longitud', 'desafioId', 'ciudadId'],
                        },
                        {
                            model:Clientes, 
                            attributes:['id', 'razon_social']
                        }
                    ]                    
                }
                
            }).then((productos)=>{
                if (!productos){
                    return res.send({ msg: 'no hay resultados' })
                }else{
                    const preciosCerca = []
                    for(let x = 0; x< productos.length; x++){
                        for(let y = 0; y < productos[x].desafios.length; y++){
                            for (let z = 0; z <productos[x].desafios[y].precios.length;z++){
                                const latPrecio = productos[x].desafios[y].precios[z].latitud
                                const longPrecio = productos[x].desafios[y].precios[z].longitud
                                const distancia = radioLatLong(lat, long, latPrecio, longPrecio, dis)
                                if (distancia.distancia_mts <= dis) { 
                                    const precioCerca = productos[x].desafios[y].precios[z].precio 
                                    const fechaCaptura = productos[x].desafios[y].precios[z].createdAt 
                                    const nomDesafio = productos[x].desafios[y].nombre_desafio
                                    const nomProducto = productos[x].nombre
                                    const cotenidoProd = productos[x].contenido_neto
                                    const umProd = productos[x].unidadMedidaCodigoUnidadMedida
                                    const nomCliente=productos[x].desafios[y].cliente.razon_social
                                    const yearCaptura = fechaCaptura.getFullYear() *10000;
                                    const monthCaptura = (fechaCaptura.getMonth()+1) *100; //getmonth asume diciembre como 11
                                    const dayCaptura = fechaCaptura.getDate();  //getDate genera el numero del dia de la fecha
                                    const fechaFinal  = yearCaptura + monthCaptura + dayCaptura
                                    
                                    const obj = {
                                        precio: precioCerca,
                                        desafio: nomDesafio,
                                        producto: nomProducto,
                                        contenido_neto: cotenidoProd,
                                        unidad_medida: umProd,
                                        distanciaPunto: distancia.distancia_mts,
                                        fecha: fechaFinal,
                                        cliente: nomCliente
                                    }
                                    preciosCerca.push(obj)
                                }
                            }
                        }
                    }
                    return res.json(preciosCerca)
                }
            })
        } else {
            res.send({ msg: 'nombre de producto inválido' })
        }
    }else{
        res.send({ msg: 'error en los datos ingresados de latitud, longitud o distancia' })
    }
}
                // .then((respuesta)=>{res.send(respuesta[0].desafios[0].precios)})
    //         .then((respuesta) => {
    //                 // return res.json(respuesta)
    //                 if (respuesta.length > 0) {
    //                     const array_productos = [];
    //                     respuesta.forEach( producto => {
    //                         producto.desafios.forEach( (desafio) => {
    //                             desafio.precios.forEach((precioo) => {
    //                                 const idcliente = desafio.clienteId
    //                                 const distancia = radioLatLong(lat, long, precioo.latitud, precioo.longitud, dis)// mediante la función radioLatLong obtengo la distancia de precio con respecto al usuario
    //                                 if (distancia.distancia_mts <= dis) { // pregunto si la distancia en metros es menor, igual a la distancia que se me pasa por el front, para poder hacer push solo a los que cumplan con esta restriccion.
    //                                     const hoyDia = precioo.createdAt
    //                                     let yearHoy = hoyDia.getFullYear() *10000;
    //                                     let monthHoy = (hoyDia.getMonth()+1) *100; //getmonth asume diciembre como 11
    //                                     let dayHoy = hoyDia.getDate();  //getDate genera el numero del dia de la fecha
    //                                     let fechaHoy  = yearHoy + monthHoy + dayHoy
    //                                     // console.log(cliente)
                                        
    //                                         const obj = {
    //                                             precio: precioo.precio,
    //                                             desafio: desafio.nombre_desafio,
    //                                             preoducto: producto.nombre,
    //                                             contenido_neto: producto.contenido_neto,
    //                                             unidad_medida: producto.unidad_medida.codigo_unidad_medida,
    //                                             distanciaPunto: distancia.distancia_mts,
    //                                             fecha: fechaHoy,
    //                                             idCLiente: idcliente
    //                                         }
    //                                         array_productos.push(obj);
    //                                     // })
    //                                 }
    //                             })
    //                         })
    //                     });
    //                     if (array_productos.length === 0) {
    //                         return { msg: "No hay productos en ese rango de distancia" }
    //                     }else{
    //                         // const cliente = buscaCliente(idcliente);
    //                         for (let x = 0; x< array_productos.length; x++){

    //                             //COmo usar el mismo id sin buscar el cliente
    //                             let cliente = await buscaCliente(array_productos[x].idCLiente)
    //                             array_productos[x].cliente = cliente.razon_social
    //                         }


    //                         return array_productos;
    //                     }
    //                 } else {
    //                     return { msg: "No hay productos que contengan o coincidan con ese nombre" }
    //                 }

    //             })
    //             .then((respuesta) => { res.send(respuesta) })
    //             .catch((err) => { next(err) });


    //     } else {
    //         res.send({ msg: 'pasar un valor de busqueda' })
    //     }
    // }else{
    //     res.send({ msg: 'error en los datos ingresados de latitud, longitud o distancia' })
    // }

    // const nombre_input = req.query.name;
    // if (nombre_input !== undefined) {  //condicion del front mandar id_subcategoria y/o mandar nombre_producto.

    //     const nombre_min = nombre_input.toLowerCase();
    //     Productos.findAll({
    //         where: {
    //             nombre: {
    //                 [Op.substring]: `${nombre_min}`
    //             }
    //         },
    //         attributes: ["nombre", "contenido_neto"], //unidad_medida, id_sub_categoria

    //         include: [

    //             {
    //                 model: Unidad_medida,
    //                 attributes: ['codigo_unidad_medida'],
    //             },
    //             {
    //                 model: Desafios,
    //                 attributes: ['nombre_desafio'],
    //                 include:
    //                 {
    //                     model: Precio,
    //                     attributes: ['precio'], //fecha_captura  
    //                 }
    //             }
    //         ]
    //     })
    //         // .then((respuesta)=>{res.send(respuesta[0].desafios[0].precios)})
    //         .then((respuesta) => {
    //             // res.json(respuesta)
    //             // console.log(respuesta)
    //             if (respuesta.length > 0) {
    //                 const array_productos = [];

    //                 respuesta.forEach(producto => {
    //                     producto.desafios.forEach((desafio) => {
    //                         desafio.precios.forEach((precioo) => {

    //                             const obj = {
    //                                 precio: precioo.precio,
    //                                 desafio: desafio.nombre_desafio,
    //                                 preoducto: producto.nombre,
    //                                 contenido_neto: producto.contenido_neto,
    //                                 unidad_medida: producto.unidad_medida.codigo_unidad_medida
    //                             }
    //                             array_productos.push(obj);
    //                         })
    //                     })
    //                 });

    //                 return array_productos;
    //             } else {
    //                 return { msg: "No hay productos que contengan o coincidan con ese nombre" }
    //             }

    //         })
    //         .then((respuesta) => { res.send(respuesta) })
    //         .catch((err) => { next(err) });


    // } else {
    //     res.send({ msg: 'pasar un valor de busqueda' })
    // }

// }

module.exports = {
    productos,
};


