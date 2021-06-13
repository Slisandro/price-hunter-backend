const { Moneda } = require("../../db");

async function moneda(req, res, next) {
  try {
    const { codigo_moneda, nombre_moneda, simbolo } = req.body;
    const mon = await Moneda.create({
      codigo_moneda,
      nombre_moneda,
      simbolo,
    });
    res.json(mon);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  moneda,
};
