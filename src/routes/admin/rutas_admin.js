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
} = require("../../controllers/admin/rutas_post.js");
const { Router } = require("express");
const router = Router();
const { auth_admin } = require('../../midelwares/auth')

router.post("/pais", auth_admin, pais);
// Ruta: http://localhost:3001/admin/pais
router.post("/region", auth_admin, region);
// http://localhost:3001/admin/region
router.post("/categoria", auth_admin, categoria);
// Ruta: http://localhost:3001/admin/categoria
router.post("/moneda", auth_admin, moneda);
// RUTA: http://localhost:3001/admin/moneda
router.post("/ciudad", auth_admin, ciudad);
// Ruta: http://localhost:3001/admin/ciudad
router.post("/tipoUsuario", auth_admin, tipo_usuario);
// Ruta : http://localhost:3001/admin/tipoUsuario
router.post("/um", auth_admin, um);
// Ruta: http://localhost:3001/admin/um
router.post("/genero", auth_admin, genero);
// Ruta: http://localhost:3001/admin/genero
router.post("/clientes", auth_admin, clientes);
// Ruta: http://localhost:3001/admin/clientes
router.post("/desafio", auth_admin, desafio);
// Ruta: http://localhost:3001/admin/desafio
router.post("/familia", auth_admin, familia);
// Ruta: http://localhost:3001/admin/familia
router.post("/subcategoria", auth_admin, subcategoria);
// Ruta: http://localhost:3001/admin/subcategoria
router.post("/tipo_transaccion", auth_admin, tipo_transaccion);
// Ruta: http://localhost:3001/admin/tipo_transaccion
router.post("/transaccion", auth_admin, transacciones);
// Ruta: http://localhost:3001/admin/transaccion
router.post("/productos", auth_admin, productos);
// Ruta: http://localhost:3001/admin/productos

module.exports = router;
