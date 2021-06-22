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
    familia,
    subcategoria,
    tipo_transaccion,
    transacciones,
    productos
  } = require("../../controllers/admin/rutas_get.js");
  const { Router } = require("express");
  const router = Router();
  
  router.get("/familia", familia);
  // Ruta: http://localhost:3001/getadmin/familia
  router.get("/categoria", categoria);
  // Ruta: http://localhost:3001/getadmin/categoria
  router.get("/subcategoria", subcategoria);
  // Ruta: http://localhost:3001/getadmin/subcategoria
  router.get("/um", um);
  // Ruta: http://localhost:3001/getadmin/um
  router.get("/region", region);
  // Ruta: http://localhost:3001/getadmin/region
  router.get("/pais", pais);
  // Ruta: http://localhost:3001/getadmin/pais
  router.get("/moneda", moneda);
  // Ruta: http://localhost:3001/getadmin/moneda
  router.get("/ciudad", ciudad);
  // Ruta: http://localhost:3001/getadmin/ciudad


  module.exports = router;