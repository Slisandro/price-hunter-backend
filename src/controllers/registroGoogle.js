const { Usuarios } = require('../db');
const bcrypt = require('bcrypt');
const authConfig = require('../../config/auth');

// ingreso de un usuario
/*
fecha_de_nacimiento,
ciudadId,
generoId,
metodo_de_cobro,
banco,
numero_de_cuenta,
password,
----------
email
----------
*/
async function registroGoogle(req, res, next) {
    const datos = req.body;
    let password = await bcrypt.hash(datos.password, +authConfig.rounds)
    const user = req.user;
    console.log(user, datos)
    const usuario = await Usuarios.update({
        tipoUsuarioId: 1,
        ciudadId: datos.ciudadId,
        generoId: datos.generoId,
        metodo_de_cobro: datos.metodo_de_cobro,
        banco: datos.banco,
        numero_de_cuenta: datos.numero_de_cuenta,
        fecha_de_nacimiento: datos.fecha_de_nacimiento,
        password: password
    }, {
        where: {
            id: user.id
        }
    })
    res.send({msg: "operación completada con éxito"})
}


module.exports = {
    registroGoogle,
};