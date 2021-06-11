const { Usuarios } = require('../db');
const bcrypt = require('bcrypt')

// registro de un nuevo usuario
async function addUsuarios(req, res, next) {
    const usuario = req.body; //traigo el objeto del body a la variable usuario
    let password = await bcrypt.hash(usuario.password, 10); //hago el cifrado de la contraseña ("es una promesa")
    // le paso la contraseña y el numero que me permite luego descifrarlo.
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
            email: usuario.email,
        });

        return res.send(nuevoUsuario);// aca tengo que enviar el token
    } catch (err) {
        next(err);
    }
}

// ingreso de un usuario
async function logUsuario(req, res, next) {
    const datos_usuario = req.body;
    try {

        const usuario = await Usuarios.findOne({
            where: {
                email: datos_usuario.email
            }
        })
        !usuario ? (
            res.status(404).send({ msg: "Usuario con este correo no encontrado" })
        ) : (
            bcrypt.compareSync(datos_usuario.password, usuario.password) ? (
                res.status(200).send(usuario)
            ) : (
                res.status(401).send({ msg: "Contraseña incorrecta" })
            )
        )

    } catch (error) {
        next(error)
    }
}


module.exports = {
    addUsuarios,
    logUsuario,
};