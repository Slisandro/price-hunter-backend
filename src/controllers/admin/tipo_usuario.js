const { Tipo_usuario } = require("../../db");

async function tipo_usuario(req, res, next) {
  try {
    const { tipo_usuario } = req.body;
    const tipoUsuario = await Tipo_usuario.create({
        tipo_usuario,
    });
    res.json(tipoUsuario);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  tipo_usuario,
};