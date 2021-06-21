const { Usuarios, Clientes } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

// ingreso de un usuario
async function logIn(req, res, next) {
    // console.log(req.user);
    const datos = req.body;
    // --------------------------------------- inicio usuario ------------------------------------- //

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
                    res.status(404).send({ msg: "Registro con este correo no encontrado" })
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
                            res.status(401).send({ msg: "Contraseña incorrecta" })
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