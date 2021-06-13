const {Productos, Precio, Desafios, Unidad_medida} = require('../db'); //fijarnos el nombre con que lo pone pablo.
const axios = require ("axios");
const { Op } = require("sequelize");



function productos(req,res,next){
    
    const nombre_input = req.query.name;  
    if(nombre_input!==undefined){  //condicion del front mandar id_subcategoria y/o mandar nombre_producto.

        const nombre_min = nombre_input.toLowerCase();
        Productos.findAll({
            where:{
                nombre:{
                    [Op.substring]: `${nombre_min}`
                }
            },
            attributes:["nombre", "contenido_neto"], //unidad_medida, id_sub_categoria
           
            include:[

                {
                    model: Unidad_medida,
                    attributes:['codigo_unidad_medida'],
                },
                {
                    model: Desafios,
                    attributes:['nombre_desafio'],
                    include:
                    {
                        model: Precio,
                        attributes:['precio'], //fecha_captura  
                    }
                }
            ] 
        })
        // .then((respuesta)=>{res.send(respuesta[0].desafios[0].precios)})
        .then((respuesta)=>{
            // res.json(respuesta)

            if(respuesta.length>0){
                const array_productos = [];
    
                respuesta.forEach(producto => {
                    producto.desafios.forEach((desafio)=>{
                        desafio.precios.forEach((precioo)=>{
                            const obj = {
                                precio: precioo.precio,
                                desafio: desafio.nombre_desafio,
                                preoducto: producto.nombre,
                                contenido_neto: producto.contenido_neto,
                                unidad_medida: producto.unidad_medida.codigo_unidad_medida
                            }
                            array_productos.push(obj);
                        })
                    })
                });
    
                return array_productos;
            }else{
                return {msg:"No hay productos que contengan o coincidan con ese nombre"}
            }

        })
        .then((respuesta)=>{res.send(respuesta)})
        .catch((err)=>{next(err)});
        
                
    } else {
        res.send({msg:'pasar un valor de busqueda'})
    }

}

module.exports = {
productos,
};


