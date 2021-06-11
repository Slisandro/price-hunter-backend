const {Paises, Moneda, Regiones} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function paises (req, res, next){

    Paises.findAll({
        attributes:['codigo_alfa', 'nombre_pais', 'monedaCodigoMoneda', 'regioneId'],
    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })

}
module.exports = {
    paises,
};