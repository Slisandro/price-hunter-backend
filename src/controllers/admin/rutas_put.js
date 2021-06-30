const {
  Familia,
  Categoria,
  Subcategoria,
  Productos,
  Paises,
  Regiones,
  Moneda,
  Ciudad,
  Tipo_usuario,
  Unidad_medida,
  Generos,
  Tipo_transaccion,
  Transacciones,
  Clientes,
  Desafios,
} = require("../../db");

// ________________ PUT FAMILIA ________________
async function put_familia(req, res, next) {
  try {
    const { id, nombre_familia, descripcion } = req.body;
    let parametros = {};
    if (nombre_familia.length > 0) {
      parametros.nombre_familia = nombre_familia;
    }
    if (descripcion.length > 0) {
      parametros.descripcion = descripcion;
    }
    const familia = await Familia.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(familia);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT CATEGORIA ________________
async function put_categoria(req, res, next) {
  try {
    const { id, nombre_categoria, descripcion, familiumId } = req.body;
    let parametros = {};
    if (nombre_categoria.length > 0) {
      parametros.nombre_categoria = nombre_categoria;
    }
    if (descripcion.length > 0) {
      parametros.descripcion = descripcion;
    }
    if (familiumId) {
      parametros.familiumId = familiumId;
    }
    const categoria = await Categoria.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(categoria);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT SUBCATEGORIA ________________
async function put_subcategoria(req, res, next) {
  //console.log(req.admin)
  try {
    const { id, nombre_subcategoria, descripcion, categoriumId } = req.body;
    let parametros = {};
    if (nombre_subcategoria.length > 0) {
      parametros.nombre_subcategoria = nombre_subcategoria;
    }
    if (descripcion && descripcion.length > 0) {
      parametros.descripcion = descripcion;
    }
    if (categoriumId) {
      parametros.categoriumId = categoriumId;
    }
    const subcategoria = await Subcategoria.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(subcategoria);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT PRODUCTOS ________________
async function put_productos(req, res, next) {
  try {
    const {
      id,
      nombre,
      contenido_neto,
      unidadMedidaCodigoUnidadMedida,
      subcategoriumId,
    } = req.body;
    let parametros = {};
    if (nombre.length > 0) {
      parametros.nombre = nombre;
    }
    if (contenido_neto) {
      parametros.contenido_neto = contenido_neto;
    }
    if (unidadMedidaCodigoUnidadMedida.length > 0) {
      parametros.unidadMedidaCodigoUnidadMedida =
        unidadMedidaCodigoUnidadMedida;
    }
    if (subcategoriumId) {
      parametros.subcategoriumId = subcategoriumId;
    }
    const productos = await Productos.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(productos);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT PAISES ________________
async function put_paises(req, res, next) {
  try {
    const { codigo_alfa, nombre_pais, regioneId, monedaCodigoMoneda } =
      req.body;
    let parametros = {};

    if (nombre_pais.length > 0) {
      parametros.nombre_pais = nombre_pais;
    }
    if (regioneId) {
      parametros.regioneId = regioneId;
    }
    // if(monedaCodigoMoneda.length > 0){
    //   parametros.monedaCodigoMoneda=monedaCodigoMoneda
    // }
    const paises = await Paises.update(parametros, {
      where: {
        codigo_alfa: codigo_alfa,
      },
    });
    res.json(paises);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT REGION ________________
async function put_region(req, res, next) {
  try {
    const { id, nombre_region } = req.body;
    let parametros = {};
    if (nombre_region.length > 0) {
      parametros.nombre_region = nombre_region;
    }

    const region = await Regiones.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(region);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT CIUDAD ________________
async function put_ciudad(req, res, next) {
  //console.log(req.admin)
  try {
    const { id, ciudad, paiseCodigoAlfa } = req.body;
    let parametros = {};
    if (ciudad.length > 0) {
      parametros.ciudad = ciudad;
    }
    if (paiseCodigoAlfa.length > 0) {
      parametros.paiseCodigoAlfa = paiseCodigoAlfa;
    }
    const ciu = await Ciudad.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(ciu);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT MONEDAS ________________
async function put_monedas(req, res, next) {
  try {
    const { codigo_moneda, nombre_moneda, simbolo } = req.body;
    let parametros = {};
    if (nombre_moneda.length > 0) {
      parametros.nombre_moneda = nombre_moneda;
    }
    if (simbolo.length > 0) {
      parametros.simbolo = simbolo;
    }
    const moneda = await Moneda.update(parametros, {
      where: {
        codigo_moneda: codigo_moneda,
      },
    });
    res.json(moneda);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT TIPO_USUARIO ________________
async function put_tipo_usuario(req, res, next) {
  try {
    const { id, tipo_usuario } = req.body;
    let parametros = {};
    if (tipo_usuario.length > 0) {
      parametros.tipo_usuario = tipo_usuario;
    }

    const tipo_usu = await Tipo_usuario.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(tipo_usu);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT UNIDAD_MEDIDA ________________
async function put_unidad_medida(req, res, next) {
  try {
    const { codigo_unidad_medida, nombre_unidad } = req.body;
    let parametros = {};
    if (nombre_unidad.length > 0) {
      parametros.nombre_unidad = nombre_unidad;
    }

    const um = await Unidad_medida.update(parametros, {
      where: {
        codigo_unidad_medida: codigo_unidad_medida,
      },
    });
    res.json(um);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT GENEROS ________________
async function put_generos(req, res, next) {
  try {
    const { id, genero } = req.body;
    let parametros = {};
    if (genero.length > 0) {
      parametros.genero = genero;
    }
    const gen = await Generos.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(gen);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT TIPO_TRANSACCION ________________
async function put_tipo_transaccion(req, res, next) {
  try {
    const { id, tipo_transaccion } = req.body;
    let parametros = {};
    if (tipo_transaccion.length > 0) {
      parametros.tipo_transaccion = tipo_transaccion;
    }
    const tipo_trans = await Tipo_transaccion.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(tipo_trans);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT TRANSACCIONES ________________
async function put_transaccion(req, res, next) {
  try {
    const { id, observacion, puntos, usuarioId, tipoTransaccionId } = req.body;
    let parametros = {};
    if (observacion.length > 0) {
      parametros.observacion = observacion;
    }
    if (puntos) {
      parametros.puntos = puntos;
    }
    if (usuarioId) {
      parametros.usuarioId = usuarioId;
    }
    if (tipoTransaccionId) {
      parametros.tipoTransaccionId = tipoTransaccionId;
    }
    const transaccion = await Transacciones.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(transaccion);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT CLIENTES ________________
async function put_clientes(req, res, next) {
  try {
    const {
      id,
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
    let parametros = {};
    if (razon_social.length > 0) {
      parametros.razon_social = razon_social;
    }
    if (nombre_cial_fantasia.length > 0) {
      parametros.nombre_cial_fantasia = nombre_cial_fantasia;
    }
    if (cuit_nit_rut.length > 0) {
      parametros.cuit_nit_rut = cuit_nit_rut;
    }
    if (email.length > 0) {
      parametros.email = email;
    }
    if (telefono.length > 0) {
      parametros.telefono = telefono;
    }
    if (direccion_fiscal.length > 0) {
      parametros.direccion_fiscal = direccion_fiscal;
    }
    if (metodo_pago.length > 0) {
      parametros.metodo_pago = metodo_pago;
    }
    if (banco.length > 0) {
      parametros.banco = banco;
    }
    if (numero_cuenta.length > 0) {
      parametros.numero_cuenta = numero_cuenta;
    }
    if (password.length > 0) {
      parametros.password = password;
    }
    if (ciudadId) {
      parametros.ciudadId = ciudadId;
    }
    if (tipoUsuarioId) {
      parametros.tipoUsuarioId = tipoUsuarioId;
    }
    const clientes = await Clientes.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(clientes);
  } catch (error) {
    next(error);
  }
}

// ________________ PUT DESAFIOS ________________
async function put_desafios(req, res, next) {
  try {
    const {
      id,
      nombre_desafio,
      descripcion_desafio,
      fecha_inicial,
      fecha_final,
      url_image,
      clienteId,
      productoId,
    } = req.body;
    let parametros = {};
    if (nombre_desafio.length > 0) {
      parametros.nombre_desafio = nombre_desafio;
    }
    if (descripcion_desafio.length > 0) {
      parametros.descripcion_desafio = descripcion_desafio;
    }
    if (fecha_inicial.length > 0) {
      parametros.fecha_inicial = fecha_inicial;
    }
    if (fecha_final.length > 0) {
      parametros.fecha_final = fecha_final;
    }
    if (url_image.length > 0) {
      parametros.url_image = url_image;
    }
    if (clienteId) {
      parametros.clienteId = clienteId;
    }
    if (productoId) {
      parametros.productoId = productoId;
    }
    const desafio = await Desafios.update(parametros, {
      where: {
        id: id,
      },
    });
    res.json(desafio);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  put_familia,
  put_categoria,
  put_subcategoria,
  put_productos,
  put_paises,
  put_region,
  put_ciudad,
  put_monedas,
  put_tipo_usuario,
  put_unidad_medida,
  put_generos,
  put_tipo_transaccion,
  put_transaccion,
  put_clientes,
  put_desafios,
};
