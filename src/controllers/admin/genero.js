const { Generos } = require("../../db");

async function genero(req, res, next) {
  try {
    const { genero } = req.body;
    const gen = await Generos.create({
      genero,
     
    });
    res.json( gen);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  genero,
};