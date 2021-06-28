const { Precio, Desafios, Detalle, Usuarios, Ciudad, Clientes, Miscelaneos} = require('../db');
const {handlePoints, comparaCoordenadas, procesaGoogle, fraccionarApiGoogle, fechaContraHoy} = require('../../config/funciones_publicas')
const { Op } = require("sequelize");
//los precios no pueden ser 'cazados' en el mismo lugar o cerca de este para el mismo
// desafio
// Los precios no pueden ser tomados si el desafio ha caducado
// los precios no pueden ser tomados si el id del desafio no existe
// Los precios no pueden ser tomados, si la cantida de precios del desaío ya fue completada.
function addPrecio (req, res, next){
  const usuarioId = req.user.id  // token
  // const ciudadUsuario = req.user.ciudadId
  // return res.json(req.user)
  let banderaCrear={aceptado: false};
  const {
      latitud, //string
      longitud, //string
      nombre_negocio, //string
      direccion_negocio,//string 
      precio, //integer
      desafioId, //integer
      arrayApi, 
  } = req.body; 

  const objGoogle = procesaGoogle(arrayApi)
  const [paisFront, nivel1Front, nivel2Front, nivel3Front] = fraccionarApiGoogle(objGoogle)

//Verificar que el desafio seleccionado este en la ciudad donde está ubicado el usuario
  Desafios.findOne({
    where:{
      id: desafioId
    },
    include:
      {
        model: Ciudad,
        where: {
          ciudad:{
              [Op.or]: [
                  {[Op.iLike]: nivel1Front},
                  {[Op.iLike]: nivel2Front},
                  {[Op.iLike]: nivel3Front},
              ]
          }
        },
      }, 
    
  }).then((desafio)=>{
    if (!desafio){
      banderaCrear = {aceptado: false,  msj: 'No se pueden capturar precios en tu ubicación'}
      return res.send(banderaCrear); 
    }else{
      const fecha_final = desafio.fecha_final
      const cantPrecios = desafio.ciudads[0].detalle.cantidad_precios;
      const cantPuntos = desafio.ciudads[0].detalle.puntos_ganar;
      const nombreDesafio = desafio.nombre_desafio;
      const idCliente = desafio.clienteId;
      const idCiudad = desafio.ciudads[0].id
      const nombreCiudad =  desafio.ciudads[0].ciudad
      // return res.json([fecha_inicial, fecha_final, cantPrecios, cantPuntos, nombreDesafio, idCliente])
      // return res.json(idCiudad)
      //Revisar que fecha del precio no exceda la fecha fina del desafío
      if (!fechaContraHoy(fecha_final)){
        banderaCrear = {aceptado: false, msj: 'El desafío a caducado'}
        return res.send(banderaCrear);
      }else{
        // return res.json(desafio);
       
         //revisar los precios capturados por el usuario y que correspondan al desafio
        //seleccionado, además revisar que no exceda la cantidad de precios a capturar
        Precio.findAll({
          attributes: ['id', 'latitud', 'longitud', 'precio', 'desafioId', 'usuarioId'],
          where:{
            ciudadId: idCiudad,
            desafioId: desafioId
          },
          include:{
            model: Ciudad,
            attributes:['id', 'ciudad']
          }
        }).then((precios)=>{
          // return res.json(precios.length)
          // if (precios.length){
            const preciosCapturados = precios.length
              if (preciosCapturados< cantPrecios){
                const preciosUsuario = precios.filter(arg => arg.usuarioId === usuarioId)
                //Validar que el precio no este en el mismo lugar que otro precio previamente
                //capturado, o dentro del margen de tolerancia admitido
                Miscelaneos.findOne({
                    where:{
                      campo: 'Metros Tolerancia',
                    }
                  }).then((mts)=>{
                    if (!mts){
                      banderaCrear = {aceptado: false,  msj: 'No hay metros de tolerancia definidos en Miscelaneas'}
                      return res.send(banderaCrear);
                    }else{
                      const mtsTolera = parseInt(mts.dato)
                      banderaCrear = comparaCoordenadas(latitud, longitud, preciosUsuario, mtsTolera)
                      if (banderaCrear.aceptado === false){
                        return res.send(banderaCrear);
                      }else{
                        Precio.create({
                          latitud: latitud,
                          longitud: longitud,
                          nombre_negocio: nombre_negocio,
                          direccion_negocio: direccion_negocio,
                          precio: precio,
                          desafioId: desafioId,
                          usuarioId:  usuarioId,
                          ciudadId: idCiudad
                        }).then((creado)=>{
                          Clientes.findOne({
                            where:{
                              id: idCliente
                            }
                          }).then(async(cliente)=>{
                            if (cliente){
                              const nombreCliente = cliente.razon_social;
                              const puntosPorPrecio = cantPuntos / cantPrecios
                              const observaciones = nombreCliente + ' - ' + nombreDesafio + ' - ' + nombreCiudad
                              const datosPuntos = await handlePoints(observaciones, puntosPorPrecio, usuarioId, 1);
                              const objCreado = Object.assign({}, creado.dataValues);
                              const objSalida = Object.assign(objCreado, banderaCrear);
                              const objSalidaPuntos =  Object.assign(objSalida, datosPuntos);                            
                              return res.json(objSalidaPuntos);
                            }
                          })
                        })
                      }
                    }
                  });
              }else{
                banderaCrear = {aceptado: false,  msj: 'Captura rechazada, ya se ha completado la cantidad de precios requerida por el cliente'}
                return res.send(banderaCrear);
              }
          // }else{
          //   banderaCrear.aceptado = true;
          // }
        })
      }
    }
  })

  
    
  // Miscelaneos.findOne({
  //   where:{
  //     campo: 'Metros Tolerancia',
  //   }
  // }).then((mts)=>{
  //   if (!mts){
  //     banderaCrear = {aceptado: false,  msj: 'No hay metros de tolerancia definidos en Miscelaneas'}
  //     return res.send(banderaCrear);
  //   }else{
  //     const mtsTolera = parseInt(mts.dato)
  //     // return res.json(mtsTolera);

  //     // se relaciona con precio para obtener la cantidad actual de precios capturados
  //     Usuarios.findAll({  
  //       include:{
  //         model: Precio,
  //         where:{
  //           desafioId: desafioId,
  //         }
  //       }

  //     }).then((usuarioCiudadPrecios)=>{
  //       // return res.send(usuarioCiudadPrecios)
  //       if (usuarioCiudadPrecios){
  //       const existeUser = usuarioCiudadPrecios.find(arg => arg.id === usuarioId);
  //         if (!existeUser){
  //           banderaCrear = {aceptado: false,  msj: 'No hay desafíos'}
  //           return res.send(banderaCrear);
  //         }else{
  //           // let ciudadUsuario;
  //           let arrayPrecios = [];

  //           for (let x =0; x < usuarioCiudadPrecios.length; x++){
  //             if (ciudadUsuario === usuarioCiudadPrecios[x].ciudadId){
  //               for (let y = 0; y < usuarioCiudadPrecios[x].precios.length; y++ ){
  //                 let objetoTemporal = usuarioCiudadPrecios[x].precios[y].dataValues;
  //                 let objetoConCiudad = Object.assign({}, objetoTemporal);
  //                 objetoConCiudad.idCiudad = ciudadUsuario;
  //                 // return res.json(objetoConCiudad);
  //                 arrayPrecios.push(objetoTemporal)
  //               }
  //             }
  //           }          
  //           // return res.json(arrayPrecios);    
  //           Desafios.findOne({
  //             where:{
  //               id: desafioId,
  //             },
  //             include:{
  //               model: Ciudad,
  //               where:{
  //               // Solo nos interesa el detalle de desafio que corresponde a la 
  //               // ciudad del usuario
  //                 id: ciudadUsuario,  
  //               }
  //             }
  //           }).then((desafio)=>{
  //             if (!desafio){ // si el desafio no existe
  //               banderaCrear = {aceptado: false, msj: 'El id del desafío no existe'}
  //               return res.send(banderaCrear);
  //             }else{ 
  //             const cantPrecios = desafio.ciudads[0].detalle.cantidad_precios;
  //             const cantPuntos = desafio.ciudads[0].detalle.puntos_ganar;
  //             const nombreDesafio = desafio.nombre_desafio
  //             const idCliente = desafio.clienteId
  //             const nombreCiudad =  desafio.ciudads[0].ciudad
  //             // return res.json(nombreCiudad);
  //               if (arrayPrecios.length > cantPrecios){
  //                 banderaCrear = {aceptado: false, msj: 'Rechazdo, cantidad de precios requeridos ya cubierta'}
  //                 return res.send(banderaCrear)
  //               }else{
  //                 //Validar si la fecha de registro es menor o igual a la fecha 
  //                 //limite del desafio
  //                 let fechaTexto = desafio.fecha_final;
  //                 let arrFecha = fechaTexto.split('-');
  //                 arrFecha = arrFecha.map(e => Number(e));
  //                 let yearDesafio = (arrFecha[0] + 2000) *10000; //2021 => 20210000
  //                 let monthDesafio = arrFecha[1]  * 100; // 11 => 1100
  //                 let dayDesafio = arrFecha[2]; //23 => 23
  //                 let fechaDesafio = yearDesafio + monthDesafio + dayDesafio;
                
  //                 let hoyDia = new Date();
  //                 let yearHoy = hoyDia.getFullYear() *10000;
  //                 let monthHoy = (hoyDia.getMonth()+1) *100; //getmonth asume diciembre como 11
  //                 let dayHoy = hoyDia.getDate();  //getDate genera el numero del dia de la fecha
  //                 let fechaHoy  = yearHoy + monthHoy + dayHoy
                  
  //                 if (fechaDesafio < fechaHoy){
  //                   banderaCrear = {aceptado: false, msj: 'El desafío a caducado'}
  //                   return res.send(banderaCrear);
  //                 }else{
  //                   // return res.json(arrayPrecios.length);
  //                 //recive true or false
  //                 banderaCrear = comparaCoordenadas (latitud, longitud, arrayPrecios, mtsTolera)
  //                 if (banderaCrear.aceptado === false){
  //                   banderaCrear = {aceptado: false, msj: 'El precio ya fue tomado en esta ubicación, o muy cerca de la misma'}
  //                   return res.send(banderaCrear);
  //                   }else{

  //                     Precio.create({
  //                       latitud: latitud,
  //                       longitud: longitud,
  //                       nombre_negocio: nombre_negocio,
  //                       direccion_negocio: direccion_negocio,
  //                       precio: precio,
  //                       desafioId: desafioId,
  //                       usuarioId:  usuarioId,
  //                     }).then((creado)=>{
  //                     //Post de puntos a transacciones
  //                       Clientes.findOne({
  //                         where:{
  //                           id: idCliente
  //                         }
  //                       }).then(async(cliente)=>{
  //                         if (cliente){
  //                           const nombreCliente = cliente.razon_social;
  //                           const puntosPorPrecio = cantPuntos / cantPrecios
  //                           const observaciones = nombreCliente + ' - ' + nombreDesafio + ' - ' + nombreCiudad
  //                           const datosPuntos = await handlePoints(observaciones, puntosPorPrecio, usuarioId, 1);
  //                           // console.log(datosPuntos);
  //                           // return res.json(datosPuntos)
                            
  //                         const objCreado = Object.assign({}, creado.dataValues);
  //                         const objSalida = Object.assign(objCreado, banderaCrear);
  //                         const objSalidaPuntos =  Object.assign(objSalida, datosPuntos);
  //                         // objcreado = Object.assign({}, );
  //                         // return res.json(banderaCrear);
                          
  //                         return res.json(objSalidaPuntos);
  //                         }
  //                       })
  //                     })
  //                   }               
  //                 }     
  //               }
  //             }
  //           })
  //         }  
  //       }
  //     })
  //   }
  // })
}



module.exports = {
  addPrecio,
};

