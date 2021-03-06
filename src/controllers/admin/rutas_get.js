
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

function ciudad(req, res, next) {
  Ciudad.findAll()
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

function tipo_usuario(req, res, next) {
  Tipo_usuario.findAll()
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

function productos(req, res, next) {
  Productos.findAll()
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

function genero(req, res, next) {
  Generos.findAll()
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

function auth(req, res, next) {
 res.send("true")
}

function categoriaById(req, res, next) {
  const { id } = req.params;
  Categoria.findAll({
    where: {
      familiumId: id,
    },
  })
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

function subcategoriaById(req, res, next) {
  const { id } = req.params;
  Subcategoria.findAll({
    where: {
      categoriumId: id,
    },
  })
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

function paisById(req, res, next) {
  const { id } = req.params;
  Paises.findAll({
    where: {
      regioneId: id,
    },
  })
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

function ciudadById(req, res, next) {
  const { id } = req.params;
  Ciudad.findAll({
    where: {
      paiseCodigoAlfa: id,
    },
  })
    .then((r) => {
      res.send(r);
    })
    .catch((error) => {
      next(error);
    });
}

module.exports = {
  familia,
  categoria,
  subcategoria,
  um,
  region,
  pais,
  moneda,
  ciudad,
  tipo_usuario,
  productos,
  categoriaById,
  subcategoriaById,
  paisById,
  ciudadById,
  genero,
  auth
};
