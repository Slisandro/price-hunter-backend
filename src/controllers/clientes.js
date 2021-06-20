const { Clientes } = require('../db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

// registro de un nuevo cliente
async function addClientes(req, res, next) {
    const cliente = req.body; //traigo el objeto del body a la variable cliente
    let password = await bcrypt.hash(cliente.password, authConfig.rounds); //hago el cifrado de la contraseña ("es una promesa")
    // le paso la contraseña 
    try {

        const nuevoCliente = await Clientes.create({
            razon_social: cliente.razon_social,
            nombre_cial_fantasia: cliente.nombre_cial_fantasia,
            cuit_nit_rut: cliente.cuit_nit_rut,
            email: cliente.email,
            telefono: cliente.telefono,
            direccion_fiscal: cliente.direccion_fiscal,
            metodo_pago: cliente.metodo_pago,
            banco: cliente.banco,
            numero_cuenta: cliente.numero_cuenta,
            password: password,
        });
        // Creamos el token
        let token = jwt.sign({ cliente: nuevoCliente }, authConfig.secret, {
            expiresIn: authConfig.expires,
        });

        res.json({
            cliente: nuevoCliente,
            token: token
        });
        // return res.send(nuevoCliente);// aca tengo que enviar el token
    } catch (err) {
        res.send({ msg: "el cliente ya existe" })
        next(err);
    }
}

// ingreso de un cliente
async function logClientes(req, res, next) {
    const datos_cliente = req.body;
    try {

        const cliente = await Clientes.findOne({
            where: {
                email: datos_cliente.email
            }
        })
        if (!cliente) {
            res.status(404).send({ msg: "cliente con este correo no encontrado" })
        } else {
            if (cliente.password === datos_cliente.password) {
                // Creamos el token
                let token = jwt.sign({ cliente: cliente }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    cliente: cliente,
                    token: token
                });
            } else {
                if (bcrypt.compareSync(datos_cliente.password, cliente.password)) {
                    // Creamos el token
                    let token = jwt.sign({ user: cliente }, authConfig.secret, {
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
        // !cliente ? (
        //     res.status(404).send({ msg: "cliente con este correo no encontrado" })
        // ) : (
        //     bcrypt.compareSync(datos_cliente.password, cliente.password) ? (
        //         res.status(200).send(cliente)
        //     ) : (
        //         res.status(401).send({ msg: "Contraseña incorrecta" })
        //     )
        // )

    } catch (error) {
        res.send({ msg: "el cliente no existe" })
        next(error)
    }
}


module.exports = {
    addClientes,
    logClientes,
};