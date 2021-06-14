const { Precios } = require('../db');
function radioLatLong (lat1, long1, lat2, long2, mtsTolerancia){
    //lat1 latitud a comparar con la tabla
    //Long1 longitud a comparar con la tabla
    //lat2 latitud de cada elemento de la tabla
    //long2 longitud de cada elemento de la tabla
    //mtsTolerancia cantidad de metros mínimos entre captura de precios
    // en 16 km hay margen de error de 13mts
    function toRad(x) {
      return x * Math.PI / 180;
    }
  
    const R =  6372.795477598; // km
  
    let dif_lat = lat2 - lat1;
    let dif_long = long2 - long1;
    let dLat = toRad(dif_lat);
    let dLon = toRad(dif_long)
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    let dMts = d *1000;
    let dif = dMts - mtsTolerancia
 
    return [dif, dMts];
}


function addPrecio (req, res, next){
    const {
        latitud,
        longitud,
        nombre_negocio, 
        direccion_negocio, 
        precio, desafioId, 
        usuarioId
    } = req.body;
    
    const newPrecio =  Precios.create({
        latitud: latitud,
        longitud: longitud,
        nombre_negocio: nombre_negocio,
        direccion_negocio: direccion_negocio,
        precio: precio,
        desafioId: desafioId,
        usuarioId:  usuarioId,
    })
}