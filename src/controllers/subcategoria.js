const {
  Subcategoria,
  Productos,
  Precio,
  Moneda,
  Usuarios,
  Ciudad,
  Paises,
} = require("../db");

/*****************************************************************************/

/* ruta de busqueda:
http://localhost:3001/subcategoria/id_subcategoria?id=id_tipo_de _usuario&idUsuario=id_usuario*/
/* ruta de ejemplo:
http://localhost:3001/subcategoria/42?id=1&idUsuario=5*/

/*****************************************************************************/

async function subcategoria(req, res, next) {
  try {
    let id_tipo_usuario = parseInt(req.query.id); // Tipo de Usuario por query
    let id_usuario = parseInt(req.query.idUsuario); // Id de usuario por query
    let id = req.params.id; // Id del subcategoria por params
    if (id_tipo_usuario === 1 || id_tipo_usuario === 3) {
      const subcategoria = await Subcategoria.findAll({
        where: {
          id: id,
        },
      });
      const producto = await Productos.findAll({
        where: {
          subcategoriumId: id,
        },
      });
      let pro = [];
      for (let i = 0; i < producto.length; i++) {
        pro.push({
          nombre: producto[i].dataValues.nombre,
          contenido_neto: producto[i].dataValues.contenido_neto,
          um: producto[i].dataValues.unidadMedidaCodigoUnidadMedida,
        });
      }

      const usuario = await Usuarios.findAll({
        where: {
          id: id_usuario,
        },
      });
      const precios = await Precio.findAll();
      let array = [];
      for (let i = 0; i < precios.length; i++) {
        if (id_usuario === precios[i].dataValues.usuarioId) {
          array.push({
            id: precios[i].dataValues.id,
            latitud: precios[i].dataValues.latitud,
            longitud: precios[i].dataValues.longitud,
            negocio: precios[i].dataValues.nombre_negocio,
            direccion: precios[i].dataValues.direccion_negocio,
            precio: precios[i].dataValues.precio,
          });
        }
      }
      const ciudad = await Ciudad.findAll({
        where: {
          id: usuario[0].dataValues.ciudadId,
        },
      });
      const paises = await Paises.findAll({
        where: {
          codigo_alfa: ciudad[0].dataValues.paiseCodigoAlfa,
        },
      });
      const moneda = await Moneda.findAll({
        where: {
          codigo_moneda: paises[0].dataValues.monedaCodigoMoneda,
        },
      });
      return res.send({
        id_subcategoria: subcategoria[0].dataValues.id,
        usuario_id: usuario[0].dataValues.id,
        nombre_subcategoria: subcategoria[0].dataValues.nombre_subcategoria,
        ciudad: {
          id: ciudad[0].dataValues.id,
          nombre: ciudad[0].dataValues.Ciudad,
        },
        pais: {
          codigo: paises[0].dataValues.codigo_alfa,
          nombre: paises[0].dataValues.nombre_pais,
        },
        moneda: {
          codigo: moneda[0].dataValues.codigo_moneda,
          nombre: moneda[0].dataValues.nombre_moneda,
          simbolo: moneda[0].dataValues.simbolo,
        },
        productos: pro,
        precios: array,
      });
    } else {
      return res.send("<h1>No tiene permisos para hacer consultas</h1>");
    }
  } catch (error) {
    next(error);
  }
}
module.exports = {
  subcategoria,
};
