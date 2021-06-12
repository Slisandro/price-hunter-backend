const {Tipo_transaccion} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function tipo_transacciones (req, res, next){

    Tipo_transaccion.findAll({
        attributes:['tipo_transaccion', 'id'],
        
    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })

}
module.exports = {
    tipo_transacciones,
};