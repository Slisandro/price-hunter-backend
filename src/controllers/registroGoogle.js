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
    try {
        const datos = req.body;
        const user = req.user;
        let password = await bcrypt.hash(user.password, +authConfig.rounds);
        // console.log(user, datos)
        await Usuarios.update({
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
        res.send({msg_ok: "operación completada con éxito"})
    } catch (error) {
        console.log(error)
        res.send({msg: "error en los datos enviados"})
    }
}


module.exports = {
    registroGoogle,
};