const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = (req, res, next) => {

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
                req.user = decoded;
                next();//el next es para que continue 
            }

        })
    }

};