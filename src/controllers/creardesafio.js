const {Desafios, Ciudad, Detalle} = require('../db'); 


async function Post_Crear_Desafio(req,res,next){
    try {
        const {
            nombre, 
            descripcion, 
            fechainicial, 
            fechafinal, 
            id_producto, 
            img, 
            ciudades 
        } = req.body;

        

        const id_cliente = req.cliente.id;
        
        if( !nombre || !descripcion || !fechainicial || !fechafinal || !id_producto || !img || !id_cliente || !ciudades || ciudades.length<=0 ){
            return res.status(200).json({msg:"Todos los campos son oblicatorios."})
        }

        if( typeof(nombre)!=="string" || typeof(descripcion)!=="string" || typeof(fechainicial)!=="string" || typeof(fechafinal)!=="string" || typeof(img)!=="string" || typeof(id_producto)!=="number" ){
            return res.status(200).json({msg:"El/Los tipos de datos de los valores son incorrectos."})
        }

        const desafio = await Desafios.findOrCreate({
            where:{
                nombre_desafio: nombre,
                descripcion_desafio: descripcion,
                fecha_inicial: fechainicial,
                fecha_final: fechafinal,
                url_image: img,
                clienteId: id_cliente,
                productoId: id_producto,
            }
        })

        
        if( desafio[1]===true){
            ciudades.forEach(async (obj_ciudad)=>{
                // const ciudad = await Ciudad.findByPk(obj_ciudad.id);
                // await desafio[0].addCiudad(ciudad, {
                //     puntos_ganar: obj_ciudad.puntosaganar,
                //     cantidad_precios: obj_ciudad.cantidaddeprecios
                // })
                Detalle.create({
                    desafioId: desafio[0].id,
                    ciudadId: obj_ciudad.id,
                    puntos_ganar: obj_ciudad.puntosaganar,
                    cantidad_precios: obj_ciudad.cantidaddeprecios
                })
            })
            res.status(200).json({msg:"El desafío fué creado exitosamente, puede verlo en tu lista de desafíos."})
        }else{
            res.status(200).json({msg:"El desafío ya existe en tu lista de desafíos."})
        }
        
    } catch (error) {
        res.json({msg:"No se pudo intente de nuevo."})
        next(error)
    }
    
}

module.exports = {
    Post_Crear_Desafio,
};





