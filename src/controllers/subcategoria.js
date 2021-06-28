const { radioLatLong} = require('../../config/funciones_publicas');


const {
  Subcategoria,
  Productos,
  Precio,
  Desafios,
  Clientes
} = require("../db");

/* ruta de ejemplo:
http://localhost:3001/subcategoria?id=84&long=-60.315329999999996&lat=-36.9122268&dis=10000
*/

async function subcategoria(req, res, next){
  const {id, lat, long, dis} = req.query;

  if (id, lat, long, dis){
    Subcategoria.findOne({
      attributes:['id'],
      where:{
        id: id,
      },
      include:{
        model: Productos,
        attributes:['id', 'nombre', 'contenido_neto', 'unidadMedidaCodigoUnidadMedida'],
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
      }

    }).then((prodsSubCategoria)=>{
      if(!prodsSubCategoria){
        return res.send({ msg: 'no hay precios en esta selección' })
      }else{
        const preciosCerca = []
        for (let x = 0; x< prodsSubCategoria.productos.length; x++){
          for (let y = 0; y<prodsSubCategoria.productos[x].desafios.length; y++ ){
            for (let z = 0; z <prodsSubCategoria.productos[x].desafios[y].precios.length; z++){
            const latPrecio = prodsSubCategoria.productos[x].desafios[y].precios[z].latitud
            const longPrecio = prodsSubCategoria.productos[x].desafios[y].precios[z].longitud
            const distancia = radioLatLong(lat, long, latPrecio, longPrecio, dis)
              if (distancia.distancia_mts <= dis) { 
                const precioCerca = prodsSubCategoria.productos[x].desafios[y].precios[z].precio 
                const fechaCaptura = prodsSubCategoria.productos[x].desafios[y].precios[z].createdAt 
                const nomDesafio = prodsSubCategoria.productos[x].desafios[y].nombre_desafio
                const nomProducto = prodsSubCategoria.productos[x].nombre
                const cotenidoProd = prodsSubCategoria.productos[x].contenido_neto
                const umProd = prodsSubCategoria.productos[x].unidadMedidaCodigoUnidadMedida
                const nomCliente=prodsSubCategoria.productos[x].desafios[y].cliente.razon_social
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
                  cliente: nomCliente,
                  geoLatLong: [parseFloat(latPrecio), parseFloat(longPrecio) ]
                }
                preciosCerca.push(obj)
              }
            }
          }
        }
        return res.send(preciosCerca);
      }
    })
  }else{
    return res.send({ msg: 'error en datos: id de subcategoría, latitud, longitud o distancia' })
  }
};

  // try {

  //   const {id} = req.params;
  
  //   const productos_array = await Subcategoria.findAll({
  //     where:{
  //       id: id
  //     },
  //     attributes:[],
  //     include:{
  //       model: Productos,
  //       attributes:['nombre', 'contenido_neto'],
  //       include:[
  //         {
  //           model: Unidad_medida,
  //           attributes:['codigo_unidad_medida'],
  //         },
  //         {
  //           model: Desafios,
  //           attributes:['nombre_desafio'],
  //           include:{
  //             model: Precio,
  //             attributes:['precio'],            
  //           }
            
  //         }
  //       ]
        
  //     }
  //   })

  //   const productos_array_modificado = []; 
    
  //   productos_array.forEach(obj => {
      
  //     obj.productos.forEach((productoo)=>{
  //       productoo.desafios.forEach((desafioo)=>{
  //         desafioo.precios.forEach((precioo)=>{
  //           productos_array_modificado.push({
  //             precio: precioo.precio,
  //             desafio: desafioo.nombre_desafio,
  //             preoducto: productoo.nombre,
  //             contenido_neto: productoo.contenido_neto,
  //             unidad_medida: productoo.unidad_medida.codigo_unidad_medida
  //           })
  //         })
  //       })
  //     })

  //   });

  //   res.status(200).send(productos_array_modificado)



  // } catch (error) {
  //   next(error);
  // }







// async function subcategoria(req, res, next) {
//   try {
//     let id_tipo_usuario = parseInt(req.query.id); // Tipo de Usuario por query
//     let id_usuario = parseInt(req.query.idUsuario); // Id de usuario por query
//     let id = req.params.id; // Id del subcategoria por params
//     if (id_tipo_usuario === 1 || id_tipo_usuario === 3) {
//       const subcategoria = await Subcategoria.findAll({
//         where: {
//           id: id,
//         },
//       });
//       const producto = await Productos.findAll({
//         where: {
//           subcategoriumId: id,
//         },
//       });
//       let pro = [];
//       for (let i = 0; i < producto.length; i++) {
//         pro.push({
//           preoducto: producto[i].dataValues.nombre,
//           contenido_neto: producto[i].dataValues.contenido_neto,
//           unidad_medida: producto[i].dataValues.unidadMedidaCodigoUnidadMedida,
//         });
//       }

//       const usuario = await Usuarios.findAll({
//         where: {
//           id: id_usuario,
//         },
//       });
//       const precios = await Precio.findAll();
//       let array = [];
//       for (let i = 0; i < precios.length; i++) {
//         if (id_usuario === precios[i].dataValues.usuarioId) {
//           array.push({
//             id: precios[i].dataValues.id,
//             latitud: precios[i].dataValues.latitud,
//             longitud: precios[i].dataValues.longitud,
//             negocio: precios[i].dataValues.nombre_negocio,
//             direccion: precios[i].dataValues.direccion_negocio,
//             precio: precios[i].dataValues.precio,
//           });
//         }
//       }
//       const ciudad = await Ciudad.findAll({
//         where: {
//           id: usuario[0].dataValues.ciudadId,
//         },
//       });
//       const paises = await Paises.findAll({
//         where: {
//           codigo_alfa: ciudad[0].dataValues.paiseCodigoAlfa,
//         },
//       });
//       const moneda = await Moneda.findAll({
//         where: {
//           codigo_moneda: paises[0].dataValues.monedaCodigoMoneda,
//         },
//       });
//       return res.send({
//         id_subcategoria: subcategoria[0].dataValues.id,
//         usuario_id: usuario[0].dataValues.id,
//         nombre_subcategoria: subcategoria[0].dataValues.nombre_subcategoria,
//         ciudad: {
//           id: ciudad[0].dataValues.id,
//           nombre: ciudad[0].dataValues.Ciudad,
//         },
//         pais: {
//           codigo: paises[0].dataValues.codigo_alfa,
//           nombre: paises[0].dataValues.nombre_pais,
//         },
//         moneda: {
//           codigo: moneda[0].dataValues.codigo_moneda,
//           nombre: moneda[0].dataValues.nombre_moneda,
//           simbolo: moneda[0].dataValues.simbolo,
//         },
//         productos: pro,
//         precios: array,
//       });
//     } else {
//       return res.send("<h1>No tiene permisos para hacer consultas</h1>");
//     }
//   } catch (error) {
//     next(error);
//   }
// }
module.exports = {
  subcategoria,
};
