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

  function subcategoria(req, res, next) {
    Subcategoria.findAll()
      .then((r) => {
        res.send(r);
      })
      .catch((error) => {
        next(error);
      });
  }

  function um(req, res, next) {
    Unidad_medida.findAll()
      .then((r) => {
        res.send(r);
      })
      .catch((error) => {
        next(error);
      });
  }

  function region(req, res, next) {
    Regiones.findAll()
      .then((r) => {
        res.send(r);
      })
      .catch((error) => {
        next(error);
      });
  }
  
  function pais(req, res, next) {
     Paises.findAll()
        .then((r) => {
          res.send(r);
        })
        .catch((error) => {
          next(error);
        });
    }

    function moneda(req, res, next) {
      Moneda.findAll()
         .then((r) => {
           res.send(r);
         })
         .catch((error) => {
           next(error);
         });
     }

module.exports = {
  familia, categoria, subcategoria, um, region, pais, moneda
};
