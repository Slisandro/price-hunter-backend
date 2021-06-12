const { Categoria } = require("../../db");

async function categoria(req, res, next) {
  try {
    const { nombre_categoria, descripcion } = req.body;
    const categoria = await Categoria.create({
      nombre_categoria,
      descripcion,
    });
    res.json(categoria);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  categoria,
};
