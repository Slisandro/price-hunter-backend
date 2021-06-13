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
      const subcategoria = await Subcategoria.findAll({ //subcategoria guarda la sub categoría que coincida el id
        where: {
          id: id,
        },
      });

      const producto = await Productos.findAll({// en producto guardamos el producto que coincida con el id de sub categoría
        where: {
          subcategoriumId: id,
        },
      });

      let pro = []; // crea el array temporal pro

      for (let i = 0; i < producto.length; i++) { // recorre la constante producto y hace push al array temporal pro (los valores que necesita)
        pro.push({
          preoducto: producto[i].dataValues.nombre,
          contenido_neto: producto[i].dataValues.contenido_neto,
          unidad_medida: producto[i].dataValues.unidadMedidaCodigoUnidadMedida,
        });
      }

      const usuario = await Usuarios.findAll({// busca el/los usuarios que coincidan con id_usuario y los guarda en usuario
        where: {
          id: id_usuario,
        },
      });

      const precios = await Precio.findAll();// busca los precios y los guarda en la constante precios

      let array = [];// crea una array temporal llamado array

      for (let i = 0; i < precios.length; i++) {//recorre la constante precios
        if (id_usuario === precios[i].dataValues.usuarioId) { // si coinciden el usuario id con el que se encuentra en precios 
          array.push({// hace el push de los valores que necesita
            id: precios[i].dataValues.id,
            latitud: precios[i].dataValues.latitud,
            longitud: precios[i].dataValues.longitud,
            negocio: precios[i].dataValues.nombre_negocio,
            direccion: precios[i].dataValues.direccion_negocio,
            precio: precios[i].dataValues.precio,
          });
        }
      }
      // filtro por ciudad
      const ciudad = await Ciudad.findAll({//guarda la ciudad que coincida con la ciudad del usuario en una constante llamada ciudad
        where: {
          id: usuario[0].dataValues.ciudadId,
        },
      });

      const paises = await Paises.findAll({//guarda el país que coincida con el país de la ciudad en la constante país
        where: {
          codigo_alfa: ciudad[0].dataValues.paiseCodigoAlfa,
        },
      });

      const moneda = await Moneda.findAll({//guarda la moneda que coincida con la moneda del país en la constante moneda
        where: {
          codigo_moneda: paises[0].dataValues.monedaCodigoMoneda,
        },
      });

      return res.send({//enviá los datos que estuvo guardando en constante (que sean necesarios)
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
