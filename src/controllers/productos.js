const { Productos, Precio, Desafios } = require('../db'); //fijarnos el nombre con que lo pone pablo.
const axios = require("axios");
const { Op } = require("sequelize");



function productos(req, res, next) {
    Precio.findAll({
        where: { usuarioId: 1 },//aca el id del user / req.user.id
    }).then(precios => {
        console.log(precios.map(price => {
            return price.dataValues
        })
        )
    }
    )


    const nombre_input = req.query.name;
    if (nombre_input !== undefined) {  //condicion del front mandar id_subcategoria y/o mandar nombre_producto.

        const nombre_min = nombre_input.toLowerCase();
        Productos.findAll({
            where: {
                nombre: {
                    [Op.substring]: `${nombre_min}`
                }
            },
            attributes: ["nombre"], //cont_neto , unidad_medida, id_sub_categoria
            include:
            {
                model: Desafios,
                attributes: ['nombre_desafio'],
                include:
                {
                    model: Precio,
                    attributes: ['precio'], //fecha_captura  
                }
            }
        })
            // .then((respuesta)=>{res.send(respuesta[0].desafios[0].precios)})
            .then((respuesta) => {

                const array_productos = [];

                respuesta.forEach(producto => {
                    producto.desafios.forEach((desafio) => {
                        desafio.precios.forEach((precioo) => {
                            const obj = {
                                precio: precioo.precio,
                                desafio: desafio.nombre_desafio,
                                preoducto: producto.nombre
                            }
                            array_productos.push(obj);
                        })
                    })
                });
                return array_productos;
            })
            .then((respuesta) => { res.send(respuesta) })
            .catch((err) => { next(err) });


    } else {
        res.send('pasar un valor de busqueda')
    }

}

module.exports = {
    productos,
};


