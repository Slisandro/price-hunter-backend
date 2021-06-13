const {Productos} = require('../db'); //fijarnos el nombre con que lo pone pablo.
// const axios = require ("axios");
// const { Op } = require("sequelize");



async function Post_Producto(req,res,next){

    try {
        const {nombre, contenido_neto, unidad_medida, id_subcategoria} = req.body;

        if( !nombre || !contenido_neto || !unidad_medida || !id_subcategoria ){
            res.status(200).json({msg:"Todos los campos son oblicatorios."})
        }

        if( typeof(nombre)!=="string" || typeof(contenido_neto)!=="number" || typeof(unidad_medida)!=="string" || typeof(id_subcategoria)!=="number" ){
            res.status(200).json({msg:"El/Los tipos de datos de los valores son incorrectos."})
        }
    
        const producto_creado_encontrado = await Productos.findOrCreate({
            where:{
                nombre: nombre.toLowerCase(),
                contenido_neto: contenido_neto,
                unidadMedidaCodigoUnidadMedida: unidad_medida,
                subcategoriumId:id_subcategoria
            }
        })

        if(producto_creado_encontrado[1]===true){
            res.status(200).json({msg:"El producto fué creado exitosamente."})
        }else{
            res.status(200).json({msg:"El producto ya existe en la lsita de categorías."})
        }
        
    } catch (error) {
        next(error)
    }
    
    
}

module.exports = {
    Post_Producto,
};


