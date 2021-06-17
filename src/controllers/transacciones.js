const {Transacciones, Tipo_transaccion, Usuarios} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function transacciones (req, res, next){
    const idUsuario = req.params.id

    Transacciones.findAll({
        attributes:['id', 'observacion', 'puntos', 'createdAt'],
        include:[{
            model: Tipo_transaccion,
            attributes: ['id', 'tipo_transaccion'],
        },{
            model: Usuarios,
            attributes:['id', 'nombre', 'apellido'],
            where:{
                id: idUsuario,
            }
        }]

    })
    .then((respuesta)=>{
        return res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = {
    transacciones,
};