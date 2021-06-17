const { Precio, Desafios, Detalle, Usuarios, Ciudad} = require('../db');

//los precios no pueden ser 'cazados' en el mismo lugar o cerca de este para el mismo
// desafio
// Los precios no pueden ser tomados si el desafio ha caducado
// los precios no pueden ser tomados si el id del desafio no existe
// Los precios no pueden ser tomados, si la cantida de precios del desaío ya fue completada.
function addPrecio (req, res, next){
  // const userIdToken = req.user.id  // por ahora no fununcia

  let banderaCrear={};
  const {
      latitud, //string
      longitud, //string
      nombre_negocio, //string
      direccion_negocio,//string 
      precio, //integer
      desafioId, //integer
      usuarioId, //integer --- lo ingonoro al usar validacion de token
      mtsTolera, /// De donde tomamos el campo? del desafio? del administrador? constante?  
  } = req.body;

    // se relaciona con precio para obtener la cantidad actual de precios capturados
  Usuarios.findAll({  
    include:{
      model: Precio,
      where:{
        desafioId: desafioId,
      }
    }

  }).then((usuarioCiudadPrecios)=>{
    if (usuarioCiudadPrecios){
    const existeUser = usuarioCiudadPrecios.find(arg => arg.id === usuarioId);
      if (!existeUser){
        banderaCrear = {aceptado: false,  msj: 'el usuario y/o el desafío no existen'}
        return res.send(banderaCrear);
      }else{
        let ciudadUsuario;
        let arrayPrecios = [];

        for (let x =0; x < usuarioCiudadPrecios.length; x++){
          if (usuarioCiudadPrecios[x].id === usuarioId){
            ciudadUsuario = usuarioCiudadPrecios[x].ciudadId;
            // return res.json(ciudadUsuario)
          break;
          }
        }
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
          const cantPrecios = desafio.ciudads[0].detalle.cantidad_precios
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
                banderaCrear = {aceptado: false, msj: 'el precio ya fue tomado en esta ubicación, o muy cerca de la misma'}
                return res.send(banderaCrear);
                }else{

                  const newPrecio =  Precio.create({
                    latitud: latitud,
                    longitud: longitud,
                    nombre_negocio: nombre_negocio,
                    direccion_negocio: direccion_negocio,
                    precio: precio,
                    desafioId: desafioId,
                    usuarioId:  usuarioId,
                  }).then((creado)=>{
                    const objCreado = Object.assign({}, creado.dataValues);
                    const objSalida = Object.assign(objCreado, banderaCrear);
                    // objcreado = Object.assign({}, );
                    // return res.json(banderaCrear);
                    
                    return res.json(objSalida);
                  })
                } 
              
              }     
            }
          }
        })
      }  
    }
  })
  //Post de puntos a transacciones
}

function radioLatLong (lat1, long1, lat2, long2, mtsTolerancia){
  //lat1 latitud a comparar con la tabla
  //Long1 longitud a comparar con la tabla
  //lat2 latitud de cada elemento de la tabla, ya exite en la BD
  //long2 longitud de cada elemento de la tabla , ya exite en la BD
  //mtsTolerancia cantidad de metros mínimos entre captura de precios  // en 16 km hay margen de error de 13mts
  let lat1Num = parseFloat(lat1.includes(',')? lat1.replace(',', '.'):lat1);
  let long1Num = parseFloat(long1.includes(',')? long1.replace(',', '.'):long1);

  function toRad(x) {
    return x * Math.PI / 180;
  }

  const R =  6372.795477598; // km

  let dif_lat = lat2 - lat1Num;
  let dif_long = long2 - long1Num;
  let dLat = toRad(dif_lat);
  let dLon = toRad(dif_long)
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  let dMts = d *1000;
  let dif = dMts - mtsTolerancia

  //objeto con la difernecia entre el radio de tolerancia y la coordenada, además de
  // la distancia en metros totales entre coordenadas
  return {diferencia_mts: dif, distancia_mts: dMts};
}

function comparaCoordenadas (lat, long, arrayObj, mtsTolera){
  //si arrayObj esta vacío significa que no hay datos encontrados 
  // con la función addPrecio. y que se trata del primer precio de un desafio

  let resp = [];
  if (arrayObj.length){ 
    for (let x = 0; x < arrayObj.length; x++){
      // console.log('holi');
      resp.push(radioLatLong(lat, long, arrayObj[x].latitud, arrayObj[x].longitud, mtsTolera))
      //evalua si el objeto recien agregado cumple con la distancia mínima o
      // estan dentro del radio de tolerancia  
      if (resp[resp.length-1].diferencia_mts<0){
        console.log('el precio ya fue ingresado en esta ubicación')
        return {aceptado: false, msj: 'el precio ya fue ingresado en esta ubicación'}
      }
    
    }
  }
  return {aceptado: true, msj: 'Captura de precios Aceptada'};

}

module.exports = {
  addPrecio,
};

