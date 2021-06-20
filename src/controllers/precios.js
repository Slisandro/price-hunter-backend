const { Precio, Desafios, Usuarios, Ciudad, Clientes, Miscelaneos} = require('../db');
const {handlePoints, comparaCoordenadas} = require('../../config/funciones_publicas')

//los precios no pueden ser 'cazados' en el mismo lugar o cerca de este para el mismo
// desafio
// Los precios no pueden ser tomados si el desafio ha caducado
// los precios no pueden ser tomados si el id del desafio no existe
// Los precios no pueden ser tomados, si la cantida de precios del desaío ya fue completada.
function addPrecio (req, res, next){
  const usuarioId = req.user.id  // por ahora no fununcia
  const ciudadUsuario = req.user.ciudadId
  // return res.json(req.user)
  let banderaCrear={};
  const {
      latitud, //string
      longitud, //string
      nombre_negocio, //string
      direccion_negocio,//string 
      precio, //integer
      desafioId, //integer
      // usuarioId, //integer --- lo ingonoro al usar validacion de token
  } = req.body; 

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
      // return res.json(mtsTolera);
      // se relaciona con precio para obtener la cantidad actual de precios capturados
      Usuarios.findAll({  
        include:{
          model: Precio,
          where:{
            desafioId: desafioId,
          }
        }

      }).then((usuarioCiudadPrecios)=>{
        // return res.send(usuarioCiudadPrecios)
        if (usuarioCiudadPrecios){
        const existeUser = usuarioCiudadPrecios.find(arg => arg.id === usuarioId);
          if (!existeUser){
            banderaCrear = {aceptado: false,  msj: 'el usuario y/o el desafío no existen'}
            return res.send(banderaCrear);
          }else{
            // let ciudadUsuario;
            let arrayPrecios = [];

            // for (let x =0; x < usuarioCiudadPrecios.length; x++){
            //   if (usuarioCiudadPrecios[x].id === usuarioId){
            //     ciudadUsuario = usuarioCiudadPrecios[x].ciudadId;
            //     // return res.json(ciudadUsuario)
            //   break;
            //   }
            // }
            for (let x =0; x < usuarioCiudadPrecios.length; x++){
              if (ciudadUsuario === usuarioCiudadPrecios[x].ciudadId){
                for (let y = 0; y < usuarioCiudadPrecios[x].precios.length; y++ ){
                  let objetoTemporal = usuarioCiudadPrecios[x].precios[y].dataValues;
                  let objetoConCiudad = Object.assign({}, objetoTemporal);
                  objetoConCiudad.idCiudad = ciudadUsuario;
                  // return res.json(objetoConCiudad);
                  arrayPrecios.push(objetoTemporal)
                }
              }
            }          
            // return res.json(arrayPrecios);    
            Desafios.findOne({
              where:{
                id: desafioId,
              },
              include:{
                model: Ciudad,
                where:{
                // Solo nos interesa el detalle de desafio que corresponde a la 
                // ciudad del usuario
                  id: ciudadUsuario,  
                }
              }
            }).then((desafio)=>{
              if (!desafio){ // si el desafio no existe
                banderaCrear = {aceptado: false, msj: 'El id del desafío no existe'}
                return res.send(banderaCrear);
              }else{ 
              const cantPrecios = desafio.ciudads[0].detalle.cantidad_precios;
              const cantPuntos = desafio.ciudads[0].detalle.puntos_ganar;
              const nombreDesafio = desafio.nombre_desafio
              const idCliente = desafio.clienteId
              const nombreCiudad =  desafio.ciudads[0].ciudad
              // return res.json(nombreCiudad);
                if (arrayPrecios.length > cantPrecios){
                  banderaCrear = {aceptado: false, msj: 'Rechazdo, cantidad de precios requeridos ya cubierta'}
                  return res.send(banderaCrear)
                }else{
                  //Validar si la fecha de registro es menor o igual a la fecha 
                  //limite del desafio
                  let fechaTexto = desafio.fecha_final;
                  let arrFecha = fechaTexto.split('-');
                  arrFecha = arrFecha.map(e => Number(e));
                  let yearDesafio = (arrFecha[0] + 2000) *10000; //2021 => 20210000
                  let monthDesafio = arrFecha[1]  * 100; // 11 => 1100
                  let dayDesafio = arrFecha[2]; //23 => 23
                  let fechaDesafio = yearDesafio + monthDesafio + dayDesafio;
                
                  let hoyDia = new Date();
                  let yearHoy = hoyDia.getFullYear() *10000;
                  let monthHoy = (hoyDia.getMonth()+1) *100; //getmonth asume diciembre como 11
                  let dayHoy = hoyDia.getDate();  //getDate genera el numero del dia de la fecha
                  let fechaHoy  = yearHoy + monthHoy + dayHoy
                  
                  if (fechaDesafio < fechaHoy){
                    banderaCrear = {aceptado: false, msj: 'El desafío a caducado'}
                    return res.send(banderaCrear);
                  }else{
                    // return res.json(arrayPrecios.length);
                  //recive true or false
                  banderaCrear = comparaCoordenadas (latitud, longitud, arrayPrecios, mtsTolera)
                  if (banderaCrear.aceptado === false){
                    banderaCrear = {aceptado: false, msj: 'El precio ya fue tomado en esta ubicación, o muy cerca de la misma'}
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
                      }).then((creado)=>{
                      //Post de puntos a transacciones
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
                            // console.log(datosPuntos);
                            // return res.json(datosPuntos)
                            
                          const objCreado = Object.assign({}, creado.dataValues);
                          const objSalida = Object.assign(objCreado, banderaCrear);
                          const objSalidaPuntos =  Object.assign(objSalida, datosPuntos);
                          // objcreado = Object.assign({}, );
                          // return res.json(banderaCrear);
                          
                          return res.json(objSalidaPuntos);
                          }
                        })
                      })
                    }               
                  }     
                }
              }
            })
          }  
        }
      })
    }
  })
}



module.exports = {
  addPrecio,
};

