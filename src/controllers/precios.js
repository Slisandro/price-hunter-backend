const { Precio, Desafios, Detalle} = require('../db');

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

    Desafios.findOne({
      attributes:['id', 'fecha_final'],
      where:{
        id: desafioId,
      }
    }).then((desafio)=>{
      if (!desafio){ // si el desafio no existe
        banderaCrear = {aceptado: false, msj: 'El id del desafío no existe'}
        return res.send(banderaCrear);

      }else{  // Si el desafió existe, se revisa que el precio no se repita en la ubicación para 
              // el mismo usuario
        
        //Validar si la fecha de registro es menor o igual a la fecha limite del desafio
        let miFecha = desafio.dataValues.fecha_final;
        let yearDesafio = miFecha.getFullYear() *10000; //2021 => 20210000
        let monthDesafio = miFecha.getMonth() * 100; // 11 => 1100
        let dayDesafio = miFecha.getDay(); //23 => 23
        let fechaDesafio = yearDesafio + monthDesafio + dayDesafio

        let hoyDia = new Date();
        let yeayHoy = hoyDia.getFullYear() *10000;
        let monthHoy = hoyDia.getMonth() *100;
        let dayHoy = hoyDia.getDay();
        let fechaHoy  = yeayHoy + monthHoy + dayHoy
 
        if (fechaDesafio < fechaHoy){
          banderaCrear = {aceptado: false, msj: 'El desafío a caducado'}
          return res.send(banderaCrear);
        }else{
          
          ///Validacion de cantidad de precios
          // Detalle.findAll({

          // })


          Precio.findAll({
            order:['id'],
            attributes:['id', 'latitud', 'longitud', 'usuarioId', 'desafioId',  'precio' ],
            where:{
              desafioId: desafioId,
              usuarioId: usuarioId,
            },
          })
          .then((respuesta)=>{ 
            let resJson = JSON.stringify(respuesta, ['id', 'latitud', 'longitud', 'usuarioId', 'desafioId',  'precio' ]);
            resJson = JSON.parse(resJson)
      
            // si este tiene conenido es por que hay datos del usuario en el  mismo desafio.
            if (resJson.length){    
              //recive true or false
              banderaCrear = comparaCoordenadas (latitud, longitud, resJson, mtsTolera)
            }else{//no hay registros del usuario en este desafio
              banderaCrear =  {aceptado: true, msj: 'primer Precio del usuario para el deasfio creado'}
            }
            
            if (banderaCrear.aceptado === true){
      
            }
      
            // const newPrecio =  Precios.create({
              //     latitud: latitud,
              //     longitud: longitud,
              //     nombre_negocio: nombre_negocio,
              //     direccion_negocio: direccion_negocio,
              //     precio: precio,
              //     desafioId: desafioId,
              //     usuarioId:  usuarioId,
              // })
              res.send(banderaCrear);
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
  //mtsTolerancia cantidad de metros mínimos entre captura de precios
  // en 16 km hay margen de error de 13mts
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
      // console.log(arrayObj[x]);
      resp.push(radioLatLong(lat, long, arrayObj[x].latitud, arrayObj[x].longitud, mtsTolera))
      //evalua si el objeto recien agregado cumple con la distancia mínima o
      // estan dentro del radio de tolerancia  
      if (resp[resp.length-1].diferencia_mts<0){
        return {aceptado: false, msj: 'el precio ya fue ingresado en esta ubicación'}
      }
    
    }
  }
  return {aceptado: true, msj: 'Precio captrurado correctamente'};

}

module.exports = {
  addPrecio,
};

