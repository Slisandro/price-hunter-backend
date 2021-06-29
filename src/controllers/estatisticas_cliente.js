const {Desafios, Ciudad, Detalle, Precio, Productos} = require('../db');
const { Op } = require("sequelize");

/// Sacar desafios que ya cumplen por fecha o cantidad de precios

function EstadisticaCliente (req, res, next){
    const idCliente = req.cliente.id
    const idDesafio = parseInt(req.params.id)
    
    if (idCliente, idDesafio){
        // return res.send([idCliente, idDesafio])
        Desafios.findOne({
            attributes:['id', 'nombre_desafio', 'descripcion_desafio', 'fecha_inicial','fecha_final'],
            include:{
                model:Ciudad,
                through: {attributes:['puntos_ganar', 'cantidad_precios']},
                include:{
                    model: Precio,
                    attributes: {exlude:['id', 'updatedAt', 'desafioId']}
                }
            }
        }).then((estadistica)=>{
            if (!estadistica){
                return res.send({msg: 'no hay datos para esta consulta'})
            }else{
                const headerDesafio = {
                    nombre_desafio: estadistica.nombre_desafio,
                    descripcion_desafio: estadistica.descripcion_desafio, 
                    fecha_inicial: estadistica.fecha_inicial,
                    fecha_final: estadistica.fecha_final,
                }
                const ciudadesDesafio=[];
                const preciosDesafio =[];
                for (let x = 0; x < estadistica.ciudads.length; x++){
                    ciudadesDesafio.push({
                        idciudad: estadistica.ciudads[x].id,
                        ciudad: estadistica.ciudads[x].ciudad,
                        alfa: estadistica.ciudads[x].paiseCodigoAlfa,
                        puntosOfrecidos: estadistica.ciudads[x].detalle.puntos_ganar,
                        cantidadPrecios : estadistica.ciudads[x].detalle.cantidad_precios,
                    })


                    for (let y = 0; y < estadistica.ciudads[x].precios.length; y++){
                        let fechaPrecio = estadistica.ciudads[x].precios[y].createdAt
                        let yearPrecio = fechaPrecio.getFullYear() *10000;
                        let monthPrecio = (fechaPrecio.getMonth()+1) *100; //getmonth asume diciembre como 11
                        let dayPrecio = fechaPrecio.getDate();  //getDate genera el numero del dia de la fecha
                        let fechaPrecioFin  = yearPrecio + monthPrecio + dayPrecio

                        preciosDesafio.push({
                            ciudadId: estadistica.ciudads[x].precios[y].id,
                            latitud: parseFloat(estadistica.ciudads[x].precios[y].latitud),
                            longitud: parseFloat(estadistica.ciudads[x].precios[y].longitud),
                            fecha: fechaPrecioFin,
                            nombre_negocio: estadistica.ciudads[x].precios[y].nombre_negocio,
                            direccion_negocio: estadistica.ciudads[x].precios[y].direccion_negocio,
                            precio: estadistica.ciudads[x].precios[y].precio,
                        })
                    }
                }
                // return res.send(estadistica)
                return res.json(
                    {
                        headerDesafio:headerDesafio,
                        ciudadesDesafio: ciudadesDesafio,
                        preciosDesafio: preciosDesafio,
                     }
                )
            }
        })
    }else{
        return res.send({msg: 'Datos de consulta inválidos'})
    }

}

module.exports = {
    EstadisticaCliente,
    
};