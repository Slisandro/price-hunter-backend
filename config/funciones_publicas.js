const {Transacciones} = require('../src/db');
const {cambiaLetras} = require('../src/datos');


function fechaContraHoy(fechaComprobar){
    let arrFecha = fechaComprobar.split('-');
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
     return false; 
    }else{
      return true;
    }
  };

function procesaGoogle (arr){
    let nuevoArray =[]
    let tipoDato = '';
    if (arr.length){
        for (let x = 0; x < arr.length; x++){
        let newName = cambiaCaracteres(arr[x].long_name).toLowerCase();
        let newShortName = cambiaCaracteres(arr[x].short_name).toLowerCase();
            if (arr[x].types[0] === 'country'){
                tipoDato = 'pais'
            }else if (arr[x].types[0] === 'administrative_area_level_1'){
                tipoDato = 'nivel1'
            }else if (arr[x].types[0] === 'administrative_area_level_2'){
                tipoDato = 'nivel2'
            }else if (arr[x].types[0] === 'locality'){
                tipoDato = 'nivel3'
            }
            nuevoArray.push(
                { 
                    long_name: newName,
                    short_name: newShortName,
                    type: tipoDato
                }
            )
        }
    }
    return nuevoArray;
}

function fraccionarApiGoogle (objGoogle){
    const paisGoogle = objGoogle.find(arg => arg.type === 'pais');
    const nivel1Google =  objGoogle.find(arg => arg.type === 'nivel1');
    const nivel2Google = objGoogle.find(arg => arg.type === 'nivel2');
    const nivel3Google = objGoogle.find(arg => arg.type === 'nivel3');

    let paisFront = paisGoogle ? paisGoogle.long_name : '';
    let nivel1Front = nivel1Google ? nivel1Google.long_name : '';
    let nivel2Front = nivel2Google ? nivel2Google.long_name : '';
    let nivel3Front = nivel3Google ? nivel3Google.long_name : '';

    return [paisFront, nivel1Front, nivel2Front, nivel3Front];
}

function cambiaCaracteres(palabra){
    let nuevaPalabra = ''; 
    if (palabra.length){
        for(let x = 0; x < palabra.length; x++){
        let objRemplaza = cambiaLetras.find(arg => arg.quitar === palabra[x]);
            if (objRemplaza){
                nuevaPalabra = nuevaPalabra + objRemplaza.poner;
            }else{
                nuevaPalabra = nuevaPalabra + palabra[x];
            }
        }
    }
    return nuevaPalabra;
} 



async function handlePoints (observacion, puntos, usuarioId, tipoTransaccionId){
    // console.log(observacion, puntos, usuarioId, tipoTransaccionId);
let rptaPuntos={};
    const Trans = await Transacciones.create({
        observacion: observacion,
        puntos: puntos,
        usuarioId: usuarioId,
        tipoTransaccionId: tipoTransaccionId,
    })

    const tipoTransaccion = Trans.dataValues.tipoTransaccionId
    if (tipoTransaccion ===1){
        rptaPuntos = {rptaPuntos: `Se han agregado ${Trans.dataValues.puntos} puntos a tu acumulado`};
        // console.log(rptaPuntos)
        return rptaPuntos;

    }else if(tipoTransaccion ===2){
        rptaPuntos =  {rptaPuntos: `Se han retirado ${Trans.dataValues.puntos} puntos de tu acumulado`};
        return rptaPuntos 
    }
}   
/**
 * radioLatLong determina la difernecia entre un punto coordinado (lat y log) y los metros de tolerancia respecto a otro u 
 * otros puntos (si se usa array), ademas de devolver la distancia entre estos. 
 * @param {*} lat1 latitud del usuario desde el front
 * @param {*} long1 longitud del usuario desde el fornt
 * @param {*} lat2 // debe venir de un array que traiga latitud de la tabla de precios
 * @param {*} long2 // debe venir de un array que traiga latitud de la tabla de precios
 * @param {*} mtsTolerancia //Viene una lista desplegable desde el front de usuario
 * @returns diferencia en metros de un punto y el margen de tolerancia y distancia total entre los dos puntos coordinados.
 */
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
          // console.log('el precio ya fue ingresado en esta ubicación')
          return {aceptado: false, msj: 'el precio ya fue ingresado en esta ubicación'}
        }
      }
    }
    return {aceptado: true, msj: 'Captura de precios Aceptada'};
}


module.exports={
    handlePoints,
    radioLatLong,
    comparaCoordenadas,
    cambiaCaracteres,
    fraccionarApiGoogle,
    procesaGoogle,
    fechaContraHoy,
    
}