const { Clientes } = require('../db');
const bcrypt = require('bcrypt')

// registro de un nuevo cliente
async function addClientes(req, res, next) {
    const cliente = req.body; //traigo el objeto del body a la variable cliente
    let password = await bcrypt.hash(cliente.password, 10); //hago el cifrado de la contraseña ("es una promesa")
    // le paso la contraseña y el numero que me permite luego descifrarlo.
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

        return res.send(nuevoCliente);// aca tengo que enviar el token
    } catch (err) {
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
        !cliente ? (
            res.status(404).send({ msg: "cliente con este correo no encontrado" })
        ) : (
            bcrypt.compareSync(datos_cliente.password, cliente.password) ? (
                res.status(200).send(cliente)
            ) : (
                res.status(401).send({ msg: "Contraseña incorrecta" })
            )
        )

    } catch (error) {
        next(error)
    }
}


module.exports = {
    addClientes,
    logClientes,
};