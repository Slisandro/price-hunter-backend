const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const { Usuarios } = require('../db');

module.exports = {
    /**
     * La función comprueba el token para verificar que este sea un usuario real
     * @param {*} req request con la información del usuario
     * @param {*} res respuesta
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
};