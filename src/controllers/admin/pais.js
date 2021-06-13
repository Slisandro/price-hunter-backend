const { Paises } = require("../../db");

async function pais(req, res, next) {
  try {
    const { codigo_alfa, nombre_pais, regioneId, monedaCodigoMoneda } = req.body;
    const p = await Paises.create({
        codigo_alfa,
        nombre_pais,
        regioneId,
        monedaCodigoMoneda
    });
    res.json(p);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pais,
};