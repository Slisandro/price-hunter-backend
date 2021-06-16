const {
  Familia,
  Productos,
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
  Subcategoria,
  Tipo_transaccion,
  Transacciones,
} = require("../../db");

// ________________ PUT FAMILIA ________________
async function put_familia(req, res, next) {
  try {
    const { id, nombre_familia, descripcion } = req.body;
    const familia = await Familia.update(
      {
        nombre_familia,
        descripcion,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json(familia);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT PRODUCTOS ________________
async function put_productos(req, res, next) {
  try {
    const { id, nombre, contenido_neto, unidadMedidaCodigoUnidadMedida, subcategoriumId } = req.body;
    const productos = await Productos.update(
      {
        nombre,
        contenido_neto,
        unidadMedidaCodigoUnidadMedida,
        subcategoriumId
      },
      {
        where: {
          id: id,
        },
      }
      );
      res.json(productos);
    } catch (error) {
    next(error);
  }
}

// ________________ PUT PAISES ________________
async function put_paises(req, res, next) {
  try {
    const { codigo_alfa, nombre_pais, regioneId} = req.body;
    const paises = await Paises.update(
      {
        nombre_pais,
        regioneId,
        // monedaCodigoMoneda
      },
      {
        where: {
          codigo_alfa: codigo_alfa,
        },
      }
      );
      res.json(paises);
    } catch (error) {
    next(error);
  }
}

// ________________ PUT REGION ________________
async function put_region(req, res, next) {
  try {
    const { id, nombre_region} = req.body;
    const region = await Regiones.update(
      {
        nombre_region,
      },
      {
        where: {
          id:id
        },
      }
      );
      res.json(region);
    } catch (error) {
    next(error);
  }
}

// ________________ PUT CIUDAD ________________
async function put_ciudad(req, res, next) {
  try {
    const { id, ciudad, paiseCodigoAlfa} = req.body;
    const ciu = await Ciudad.update(
      {
        ciudad,
        paiseCodigoAlfa
      },
      {
        where: {
          id:id
        },
      }
      );
      res.json(ciu);
    } catch (error) {
    next(error);
  }
}

// ________________ PUT MONEDAS ________________
async function put_monedas(req, res, next) {
  try {
    const { codigo_moneda, nombre_moneda, simbolo} = req.body;
    const moneda = await Moneda.update(
      {
        nombre_moneda,
        simbolo
      },
      {
        where: {
          codigo_moneda:codigo_moneda
        },
      }
      );
      res.json(moneda);
    } catch (error) {
    next(error);
  }
}

module.exports = {
  put_familia,
  put_productos,
  put_paises,
  put_region,
  put_ciudad,
  put_monedas,
};
