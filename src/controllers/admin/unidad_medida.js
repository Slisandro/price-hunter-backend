const { Unidad_medida } = require("../../db");

async function um(req, res, next) {
  try {
    const { codigo_unidad_medida, nombre_unidad } = req.body;
    const um = await Unidad_medida.create({
      codigo_unidad_medida,
      nombre_unidad,
    });
    res.json(um);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  um,
};