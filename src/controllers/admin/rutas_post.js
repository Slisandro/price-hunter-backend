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

// --------------FAMILIA--------------
async function familia(req, res, next) {
  try {
    const { nombre_familia, descripcion } = req.body;
    const familia = await Familia.create({
      nombre_familia,
      descripcion,
    });
    res.json(familia);
  } catch (error) {
    next(error);
  }
}
// --------------CATEGORIAS--------------
async function categoria(req, res, next) {
  try {
    const { nombre_categoria, descripcion, familiumId } = req.body;
    const categoria = await Categoria.create({
      nombre_categoria,
      descripcion,
      familiumId,
    });
    res.json(categoria);
  } catch (error) {
    next(error);
  }
}
// --------------SUBCATEGORIA--------------
async function subcategoria(req, res, next) {
  try {
    const { nombre_subcategoria, descripcion, categoriumId } = req.body;
    const subcat = await Subcategoria.create({
      nombre_subcategoria,
      descripcion,
      categoriumId,
    });
    res.json(subcat);
  } catch (error) {
    next(error);
  }
}
// --------------TIPO DE USUARIO--------------
async function tipo_usuario(req, res, next) {
  try {
    const { tipo_usuario } = req.body;
    const tipoUsuario = await Tipo_usuario.create({
      tipo_usuario,
    });
    res.json(tipoUsuario);
  } catch (error) {
    next(error);
  }
}
// --------------UNIDAD DE MEDIDA--------------
async function um(req, res, next) {
  try {
    const { codigo_unidad_medida, nombre_unidad } = req.body;
    const um = await Unidad_medida.create({
      codigo_unidad_medida,
      nombre_unidad,
    });
    res.json(um);
  } catch (error) {
    next(error);
  }
}
// --------------MONEDA--------------
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
// --------------GENERO--------------
async function genero(req, res, next) {
  try {
    const { genero } = req.body;
    const gen = await Generos.create({
      genero,
    });
    res.json(gen);
  } catch (error) {
    next(error);
  }
}
// --------------PAIS--------------
async function pais(req, res, next) {
  try {
    const { codigo_alfa, nombre_pais, regioneId, monedaCodigoMoneda } =
      req.body;
    const p = await Paises.create({
      codigo_alfa,
      nombre_pais,
      regioneId,
      monedaCodigoMoneda,
    });
    res.json(p);
  } catch (error) {
    next(error);
  }
}
// --------------CIUDAD--------------
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

// --------------REGION--------------
async function region(req, res, next) {
  try {
    const { nombre_region } = req.body;
    const region = await Regiones.create({
      nombre_region,
    });
    res.json(region);
  } catch (error) {
    next(error);
  }
}
// --------------CLIENTES--------------
async function clientes(req, res, next) {
  try {
    const {
      razon_social,
      nombre_cial_fantasia,
      cuit_nit_rut,
      email,
      telefono,
      direccion_fiscal,
      metodo_pago,
      banco,
      numero_cuenta,
      password,
      ciudadId,
      tipoUsuarioId,
    } = req.body;
    const clientes = await Clientes.create({
      razon_social,
      nombre_cial_fantasia,
      cuit_nit_rut,
      email,
      telefono,
      direccion_fiscal,
      metodo_pago,
      banco,
      numero_cuenta,
      password,
      ciudadId,
      tipoUsuarioId,
    });
    res.json(clientes);
  } catch (error) {
    next(error);
  }
}
// --------------DESAFIOS--------------
async function desafio(req, res, next) {
  try {
    const {
      nombre_desafio,
      descripcion_desafio,
      fecha_inicial,
      fecha_final,
      url_image,
      clienteId,
      productoId,
    } = req.body;
    const desafio = await Desafios.create({
      nombre_desafio,
      descripcion_desafio,
      fecha_inicial,
      fecha_final,
      url_image,
      clienteId,
      productoId,
    });
    res.json(desafio);
  } catch (error) {
    next(error);
  }
}
// --------------TIPO DE TRANSACCION--------------
async function tipo_transaccion(req, res, next) {
  try {
    const { tipo_transaccion } = req.body;
    const tipo_trans = await Tipo_transaccion.create({
      tipo_transaccion,
    });
    res.json(tipo_trans);
  } catch (error) {
    next(error);
  }
}
// --------------TRANSACCIONES--------------
async function transacciones(req, res, next) {
  try {
    const { observacion, puntos, usuarioId, tipoTransaccionId } = req.body;
    const trans = await Transacciones.create({
      observacion,
      puntos,
      usuarioId,
      tipoTransaccionId,
    });
    res.json(trans);
  } catch (error) {
    next(error);
  }
}
// --------------PRODUCTOS--------------
async function productos(req, res, next) {
  try {
    const {
      nombre,
      contenido_neto,
      unidadMedidaCodigoUnidadMedida,
      subcategoriumId,
    } = req.body;
    const prod = await Productos.create({
      nombre,
      contenido_neto,
      unidadMedidaCodigoUnidadMedida,
      subcategoriumId,
    });
    res.json(prod);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  categoria,
  subcategoria,
  tipo_usuario,
  um,
  moneda,
  genero,
  pais,
  ciudad,
  region,
  clientes,
  desafio,
  familia,
  tipo_transaccion,
  transacciones,
  productos,
};
