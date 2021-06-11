const { Usuarios } = require('../db');
const bcrypt = require('bcrypt')

async function addUsuarios(req, res, next) {
    const usuario = req.body;
    let password = await bcrypt.hash(usuario.password, 10);
    console.log(password)
    try {

        const nuevoUsuario = await Usuarios.create({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            fecha_de_nacimiento: usuario.fecha_de_nacimiento,
            ciudadId: usuario.ciudadId,
            generoId: usuario.generoId, 
            metodo_de_cobro: usuario.metodo_de_cobro, 
            banco: usuario.banco,
            numero_de_cuenta: usuario.numero_de_cuenta,
            tipoUsuarioId: usuario.tipoUsuarioId,
            password: password,
        });

        return res.send(nuevoUsuario);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addUsuarios,
};