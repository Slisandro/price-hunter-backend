const { Usuarios } = require('../db');
// const axios = require("axios");
// const { Op } = require("sequelize");

async function addUsuarios(req, res, next) {
    const usuario = req.body;
    console.log(usuario)
    try {
        const nuevoUsuario = await Usuarios.create(usuario);
        return res.send(nuevoUsuario);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addUsuarios,
};