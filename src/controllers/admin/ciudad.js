const { Ciudad } = require("../../db");

async function ciudad(req, res, next) {
  try {
    const { ciudad, paiseCodigoAlfa } = req.body;
    const ciu = await Ciudad.create({
      ciudad,
      paiseCodigoAlfa,
    });
    res.json(ciu);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  ciudad,
};
