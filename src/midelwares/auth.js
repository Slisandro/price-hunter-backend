const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
// const {OAuth2Client} = require('google-auth-library');
const { Usuarios, Clientes, Administradores } = require('../db');

// const client = new OAuth2Client(CLIENT_ID);

module.exports = {
    /**
     * La función comprueba el token para verificar que este sea un "usuario" real
     * @param {*} req request con el token del usuario
     * @param {*} res respuesta con información del usuario (req.user)
     * @param {*} next 
     */
    auth(req, res, next) {

        //console.log(req.headers);// comprobamos los headers que vienen del req

        // Comprobar que existe el token
        if (!req.headers.authorization) {
            res.status(401).json({ msg: "Acceso no autorizado" });// si no existe enviamos mensaje de error
        } else {
            // Comrpobar la validez de este token
            let token = req.headers.authorization.split(" ")[1];// el token viene en esta ruta separado por un espacio de otra palabra que no necesitamos
            let secret = req.headers.authorization.split(" ")[2];
            if (secret) {
                jwt.verify(token, secret, (err, decoded) => {
                    Usuarios.findByPk(decoded.user.id, {
                    }).then(user => {
                        //console.log(user.roles);
                        req.user = user.dataValues;
                        next();
                    });
                })
            } else {
                // Comprobar la validez de este token
                jwt.verify(token, authConfig.secret, (err, decoded) => {// pasamos el token y el secret de el archivo authConfig
                    if (err) {// si hay un error o el token no es valido enviamos un mensaje de error y el error
                        res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
                    } else {//sino enviamos los datos del usuario por req para su posterior uso
                        // req.user = decoded.user;
                        // next();//el next es para que continue 
                        //revisar que solo trae un valor en lugar de traer muchos que coincidan.
                        Usuarios.findByPk(decoded.user.id, {
                        }).then(user => {
                            //console.log(user.roles);
                            req.user = user.dataValues;
                            next();
                        });
                    }

                })
            }
        }
    },
    /**
     * La función comprueba el token para verificar que este sea un "usuario de google"
     * @param {*} req request con el usuario
     * @param {*} res respuesta con información del usuario (req.user)
     * @param {*} next 
     */
    authGoogleUsers(req, res, next) {
        let password = req.user.password;
        if (password === "passwordGoogle") {
         res.send({msg: "completar los datos del usuario antes de continuar"})   
        }else{
            next()
        }
    },
    /**
    * La función comprueba el token para verificar que este sea un "cliente" real
    * @param {*} req request con el token del cliente
    * @param {*} res respuesta con información del cliente (req.cliente)
    * @param {*} next 
    */
    auth_cliente(req, res, next) {

        //console.log(req.headers);// comprobamos los headers que vienen del req

        // Comprobar que existe el token
        if (!req.headers.authorization) {
            res.status(401).json({ msg: "Acceso no autorizado" });// si no existe enviamos mensaje de error
        } else {
            // Comrpobar la validez de este token
            let token = req.headers.authorization.split(" ")[1];// el token viene en esta ruta separado por un espacio de otra palabra que no necesitamos

            // Comprobar la validez de este token
            jwt.verify(token, authConfig.secret, (err, decoded) => {// pasamos el token y el secret de el archivo authConfig

                if (err) {// si hay un error o el token no es valido enviamos un mensaje de error y el error
                    res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
                } else {//sino enviamos los datos del cliente por req para su posterior uso
                    Clientes.findByPk(decoded.cliente.id, {
                    }).then(cliente => {
                        //console.log(user.roles);
                        req.cliente = cliente.dataValues;
                        next();
                    });
                }

            })
        }

    },
    /**
   * La función comprueba el token para verificar que este sea un "admin" real
   * @param {*} req request con el token del admin
   * @param {*} res respuesta con información del admin (req.admin)
   * @param {*} next 
   */
    auth_admin(req, res, next) {

        //console.log(req.headers);// comprobamos los headers que vienen del req

        // Comprobar que existe el token
        if (!req.headers.authorization) {
            res.status(401).json({ msg: "Acceso no autorizado" });// si no existe enviamos mensaje de error
        } else {
            // Comrpobar la validez de este token
            let token = req.headers.authorization.split(" ")[1];// el token viene en esta ruta separado por un espacio de otra palabra que no necesitamos

            // Comprobar la validez de este token
            jwt.verify(token, authConfig.secret, (err, decoded) => {// pasamos el token y el secret de el archivo authConfig

                if (err) {// si hay un error o el token no es valido enviamos un mensaje de error y el error
                    res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
                } else {//sino enviamos los datos del admin por req para su posterior uso
                    Administradores.findByPk(decoded.admin.id, {
                    }).then(admin => {
                        //console.log(user.roles);
                        req.admin = admin.dataValues;
                        next();
                    });
                }

            })
        }

    }
};