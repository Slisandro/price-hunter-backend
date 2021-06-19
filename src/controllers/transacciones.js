const {Transacciones, Tipo_transaccion, Usuarios} = require('../db'); //fijarnos el nombre con que lo pone pablo.
const {handlePoints} = require('../../config/funciones_publicas')
function transacciones (req, res, next){
    const idUsuario = req.user.id

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

async function retiraPuntos (req, res, next){
    const {puntosRetiro} = req.body
    const usuarioId = req.user.id
    const banco = req.user.banco
    const cuenta = req.user.numero_de_cuenta
    const metodocobro = req.user.metodo_de_cobro

    const cubreCuenta = '****' + cuenta.slice(cuenta.length - 4, cuenta.length)
    const observacion = metodocobro + ' ' + banco + ' ' + cubreCuenta;
    const datosPuntos = await handlePoints(observacion, puntosRetiro, usuarioId, 2);

        return res.send(datosPuntos);
}

module.exports = {
    transacciones,
    retiraPuntos,
};