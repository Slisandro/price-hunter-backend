const { Administradores } = require('../../db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authConfig = require('../../../config/auth');

// registro de un nuevo admin
async function addAdmin(req, res, next) {
    const admin = req.body; //traigo el objeto del body a la variable admin
    
    let password = await bcrypt.hash(admin.password, +authConfig.rounds); //hago el cifrado de la contraseña ("es una promesa")
    // le paso la contraseña 

    Administradores.create({
        nombre: admin.nombre,
        email: admin.email,
        password: password,
        tipoUsuarioId: 3,
    }).then(admin => {

        // Creamos el token
        let token = jwt.sign({ admin: admin }, authConfig.secret, {
            expiresIn: authConfig.expires,
        });

        res.json({
            admin: admin,
            token: token
        });
        // return res.send(nuevoAdmin);// aca tengo que enviar el token
    }).catch(err => {console.log(err)
        res.json({ msg: "el admin ya existe" })
        // next(err);
    })

}
module.exports = {
    addAdmin,
};