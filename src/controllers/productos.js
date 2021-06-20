const { Productos, Precio, Desafios, Unidad_medida } = require('../db'); //fijarnos el nombre con que lo pone pablo.
const axios = require("axios");
const { Op } = require("sequelize");
const { radioLatLong } = require('../../config/funciones_publicas');



function productos(req, res, next) {
    // console.log(req.user)
    const {lat, long, dis} = req.query;

    if (lat && long && dis) {
        const nombre_input = req.query.name;
        if (nombre_input !== undefined) {  //condicion del front mandar id_subcategoria y/o mandar nombre_producto.

            const nombre_min = nombre_input.toLowerCase();
            Productos.findAll({
                where: {
                    nombre: {
                        [Op.substring]: `${nombre_min}`
                    }
                },
                attributes: ["nombre", "contenido_neto"], //unidad_medida, id_sub_categoria

                include: [

                    {
                        model: Unidad_medida,
                        attributes: ['codigo_unidad_medida'],
                    },
                    {
                        model: Desafios,
                        attributes: ['nombre_desafio'],
                        include:
                        {
                            model: Precio,
                            attributes: ['precio', "latitud", "longitud"], //fecha_captura  
                        }
                    }
                ]
            })
                // .then((respuesta)=>{res.send(respuesta[0].desafios[0].precios)})
                .then((respuesta) => {
                    // res.json(respuesta)

                    if (respuesta.length > 0) {
                        const array_productos = [];
                        respuesta.forEach(producto => {
                            producto.desafios.forEach((desafio) => {
                                desafio.precios.forEach((precioo) => {
                                    const distancia = radioLatLong(lat, long, precioo.latitud, precioo.longitud, dis)// mediante la función radioLatLong obtengo la distancia de precio con respecto al usuario
                                    if (distancia.distancia_mts <= dis) { // pregunto si la distancia en metros es menor, igual a la distancia que se me pasa por el front, para poder hacer push solo a los que cumplan con esta restriccion.
                                        const obj = {
                                            precio: precioo.precio,
                                            desafio: desafio.nombre_desafio,
                                            preoducto: producto.nombre,
                                            contenido_neto: producto.contenido_neto,
                                            unidad_medida: producto.unidad_medida.codigo_unidad_medida
                                        }
                                        array_productos.push(obj);
                                    }
                                })
                            })
                        });
                        if (array_productos.length === 0) {
                            return { msg: "No hay productos en ese rango de distancia" }
                        }else{
                            return array_productos;
                        }
                    } else {
                        return { msg: "No hay productos que contengan o coincidan con ese nombre" }
                    }

                })
                .then((respuesta) => { res.send(respuesta) })
                .catch((err) => { next(err) });


        } else {
            res.send({ msg: 'pasar un valor de busqueda' })
        }
    }else{
        res.send({ msg: 'error en los datos ingresados de latitud, longitud o distancia' })
    }

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

}

module.exports = {
    productos,
};


