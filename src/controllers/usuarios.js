const { Usuarios } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

// registro de un nuevo usuario
async function addUsuarios(req, res, next) {
    const usuario = req.body; //traigo el objeto del body a la variable usuario
    let password = await bcrypt.hash(usuario.password, +authConfig.rounds); //hago el cifrado de la contraseña ("es una promesa")
    // le paso la contraseña, le paso un numero con un signo de mas (+) para que esta variable sea un numero === number
    if (
        usuario.nombre === undefined ||
        usuario.apellido === undefined ||
        usuario.fecha_de_nacimiento === undefined ||
        usuario.email === undefined ||
        usuario.password === undefined
    ) {
        return res.status(400).send({ msg: "error en los datos enviados" })
    }
    if (usuario.nombre.length < 3) {
        return res.status(400).send({ msg: "error en nombre enviado" })
    }
    if (usuario.apellido.length < 2) {
        return res.status(400).send({ msg: "error en apellido enviado" })
    }
    if (usuario.fecha_de_nacimiento.length < 3) {
        return res.status(400).send({ msg: "error en la fecha enviada" })
    }
    if (usuario.password.length < 3) {
        return res.status(400).send({ msg: "error en la contraseña enviado" })
    }
    Usuarios.create({
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
    }).then(user => {
        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
        });

        res.json({
            user: user,
            token: token
        });
    }).catch(err => {
        res.send({ msg: "el usuario ya existe" })
        next(err);
    })
}

// ingreso de un usuario
async function logUsuario(req, res, next) {
    // console.log(req.user);
    const datos_usuario = req.body;

        Usuarios.findOne({
            where: {
                email: datos_usuario.email
            }
        }).then(user => {
            if (!user) {
                res.status(404).send({ msg: "Usuario con este correo no encontrado" })
            } else {//los usuarios pre cargados no se pueden hacer login porque su contraseña no esta codificada
                if (user.password === datos_usuario.password) {
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    res.json({
                        user: user,
                        token: token
                    });
                } else {
                    if (bcrypt.compareSync(datos_usuario.password, user.password)) {
                        // Creamos el token
                        let token = jwt.sign({ user: user }, authConfig.secret, {
                            expiresIn: authConfig.expires
                        });
                        res.json({
                            user: user,
                            token: token
                        });
                    } else {
                        res.status(401).send({ msg: "Contraseña incorrecta" })
                    }
                }

            }
        }).catch (error =>{
            res.send({ msg: "el usuario no existe" })
            next(error)})
}


module.exports = {
    addUsuarios,
    logUsuario,
};