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
// await modeloEquipo.update(
//   {
//     trabajadoreId: peticion.body.idTrabajador,
//   },
//   { where: { id: idEquipo } }
// );

module.exports = {
  put_familia,
  // categoria,
};
