const {Tipo_usuario} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function tipo_usuario (req, res, next){

    Tipo_usuario.findAll({
        attributes:['tipo_usuario', 'id'],
        
    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })

}
module.exports = {
    tipo_usuario,
};