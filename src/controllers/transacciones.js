const {Transacciones, Tipo_transaccion, Usuarios} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function transacciones (req, res, next){

    Transacciones.findAll({
        attributes:['id', 'observacion', 'puntos', 'createdAt'],
        include:[{
            model: Tipo_transaccion,
            attributes: ['id', 'tipo_transaccion'],
        },{
            model: Usuarios,
            attributes:['nombre', 'apellido']
        }]

    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = {
    transacciones,
};