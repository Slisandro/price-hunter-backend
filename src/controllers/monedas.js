const {Moneda} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function monedas (req, res, next){

    Moneda.findAll({
        attributes:['codigo_moneda', 'nombre_moneda', 'simbolo'],
    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })

}
module.exports = {
    monedas,
};