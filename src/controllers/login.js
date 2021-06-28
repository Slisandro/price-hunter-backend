const { Usuarios, Clientes, Administradores } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
// const {OAuth2Client} = require('google-auth-library');

// ingreso de un usuario
async function logIn(req, res, next) {
    const datos = req.body;
    if (datos.Aa) {
        let datos_google = datos.dt;
        const [usuarioGoogle, created] = await Usuarios.findOrCreate({
            where: {
                email: datos_google.Nt
            },
            defaults: {
                nombre: datos_google.uU,
                apellido: datos_google.qS,
                email: datos_google.Nt,
                fecha_de_nacimiento: "",
                password: "passwordGoogle",
            }
        })
        console.log(created)
        if (usuarioGoogle) {
            if (created) {
                let token = jwt.sign({ user: usuarioGoogle.dataValues }, datos.mc.idpId, {
                    expiresIn: datos.mc.expires_at
                });
                return res.json({
                    user: usuarioGoogle.dataValues,
                    token: `${token} ${datos.mc.idpId}`
                });
            }else{
                let token = jwt.sign({ user: usuarioGoogle.dataValues }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                return res.json({
                    user: usuarioGoogle.dataValues,
                    token: token
                });
            }
        }else{
            res.status(500).send({ msg: "error en el server" })
        }
    }

    Usuarios.findOne({
        where: {
            email: datos.email
        }
    }).then(user => {
        if (!user) {
            // res.status(404).send({ msg: "Usuario con este correo no encontrado" })

            // --------------------------------------- inicio cliente ------------------------------------- //

            Clientes.findOne({
                where: {
                    email: datos.email
                }
            }).then(cliente => {
                if (!cliente) {
                    // res.status(404).send({ msg: "Registro con este correo no encontrado" })

                    // --------------------------------------- inicio admin ------------------------------------- //
                    Administradores.findOne({
                        where: {
                            email: datos.email
                        }
                    }).then(admin => {
                        if (!admin) {
                            res.json({ msg: "Registro con este correo no encontrado" })
                        } else {
                            if (admin.password === datos.password) {
                                let token = jwt.sign({ admin: admin }, authConfig.secret, {
                                    expiresIn: authConfig.expires
                                });
                                res.json({
                                    admin: admin,
                                    token: token
                                });
                            } else {
                                if (bcrypt.compareSync(datos.password, admin.password)) {
                                    // Creamos el token
                                    let token = jwt.sign({ admin: admin }, authConfig.secret, {
                                        expiresIn: authConfig.expires
                                    });
                                    res.json({
                                        admin: admin,
                                        token: token
                                    });
                                } else {
                                    res.status(401).send({ msg: "Contraseña incorrecta" })
                                }
                            }
                        }
                    })
                    // --------------------------------------- fin admin ------------------------------------- //
                } else {
                    if (cliente.password === datos.password) {
                        let token = jwt.sign({ cliente: cliente }, authConfig.secret, {
                            expiresIn: authConfig.expires
                        });
                        res.json({
                            cliente: cliente,
                            token: token
                        });
                    } else {
                        if (bcrypt.compareSync(datos.password, cliente.password)) {
                            // Creamos el token
                            let token = jwt.sign({ cliente: cliente }, authConfig.secret, {
                                expiresIn: authConfig.expires
                            });
                            res.json({
                                cliente: cliente,
                                token: token
                            });
                        } else {
                            res.send({ msg: "Contraseña incorrecta" })
                        }
                    }
                }
            })

            // --------------------------------------- fin cliente ------------------------------------- //

        } else {//los usuarios pre cargados no se pueden hacer login porque su contraseña no esta codificada
            if (user.password === datos.password) {
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    user: user,
                    token: token
                });
            } else {
                if (bcrypt.compareSync(datos.password, user.password)) {
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
        // --------------------------------------- fin usuario ------------------------------------- //
    }).catch(error => {
        res.send({ msg: "No existe este registro" })
        next(error)
    })
}


module.exports = {
    logIn,
};