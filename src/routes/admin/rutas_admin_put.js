const {
    put_familia,
    put_productos,
    put_paises,
    put_region,
    categoria,
    moneda,
    ciudad,
    tipo_usuario,
    genero,
    clientes,
    desafio,
    um,
    subcategoria,
    tipo_transaccion,
    transacciones,
  } = require("../../controllers/admin/rutas_put.js");
  const { Router } = require("express");
  const router = Router();
  
  router.put("/familia", put_familia);
  // Ruta: http://localhost:3001/putadmin/familia
  router.put("/productos", put_productos);
  // Ruta: http://localhost:3001/getadmin/productos
  router.put("/paises", put_paises);
  // Ruta: http://localhost:3001/getadmin/paises
  router.put("/region", put_region);
  // Ruta: http://localhost:3001/getadmin/region

  module.exports = router;