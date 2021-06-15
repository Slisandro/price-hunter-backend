const {
  Paises,
  Regiones,
  Categoria,
  Moneda,
  Ciudad,
  Tipo_usuario,
  Unidad_medida,
  Generos,
  Clientes,
  Desafios,
  Familia,
  Subcategoria,
  Tipo_transaccion,
  Transacciones,
  Productos,
} = require("../../db");

function familia(req, res, next) {
  Familia.findAll()
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

function categoria(req, res, next) {
    Categoria.findAll()
      .then((r) => {
        res.send(r);
      })
      .catch((error) => {
        next(error);
      });
  }

module.exports = {
  familia, categoria, 
};
