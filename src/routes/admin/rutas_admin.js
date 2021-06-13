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
  transacciones
} = require("../../controllers/admin/rutas_post.js");
const { Router } = require("express");
const router = Router();

router.post("/pais", pais);
// Ruta: http://localhost:3001/admin/pais
router.post("/region", region);
// http://localhost:3001/admin/region
router.post("/categoria", categoria);
// Ruta: http://localhost:3001/admin/categoria
router.post("/moneda", moneda);
// RUTA: http://localhost:3001/admin/moneda
router.post("/ciudad", ciudad);
// Ruta: http://localhost:3001/admin/ciudad
router.post("/tipoUsuario", tipo_usuario);
// Ruta : http://localhost:3001/admin/tipoUsuario
router.post("/um", um);
// Ruta: http://localhost:3001/admin/um
router.post("/genero", genero);
// Ruta: http://localhost:3001/admin/genero
router.post("/clientes", clientes);
// Ruta: http://localhost:3001/admin/clientes
router.post("/desafio", desafio);
// Ruta: http://localhost:3001/admin/desafio
router.post("/familia", familia);
// Ruta: http://localhost:3001/admin/familia
router.post("/subcategoria", subcategoria);
// Ruta: http://localhost:3001/admin/subcategoria
router.post("/tipo_transaccion", tipo_transaccion);
// Ruta: http://localhost:3001/admin/tipo_transaccion
router.post("/transaccion", transacciones);
// Ruta: http://localhost:3001/admin/transaccion

module.exports = router;
