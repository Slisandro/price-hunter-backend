const {
    pais,
    region,
    categoria,
    moneda,
    ciudad,
    tipo_usuario,
    genero,
    clientes,
    desafio,
    um,
    put_familia,
    subcategoria,
    tipo_transaccion,
    transacciones,
    productos
  } = require("../../controllers/admin/rutas_put.js");
  const { Router } = require("express");
  const router = Router();
  
  router.put("/familia", put_familia);
  // Ruta: http://localhost:3001/putadmin/familia
//   router.get("/categoria", categoria);
//   // Ruta: http://localhost:3001/getadmin/familia

  module.exports = router;