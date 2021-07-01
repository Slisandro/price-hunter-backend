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
  productos,
  categoriaById,
  subcategoriaById,
  paisById,
  ciudadById,
  auth
} = require("../../controllers/admin/rutas_get.js");
const { Router } = require("express");
const router = Router();
const { auth_admin } = require('../../midelwares/auth')

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
router.get("/tipo_usuario", tipo_usuario);
// Ruta: http://localhost:3001/getadmin/tipo_usuario
router.get("/productos", productos);
// Ruta: http://localhost:3001/getadmin/productos
router.get("/genero", genero);
// Ruta: http://localhost:3001/getadmin/genero
router.get("/auth", auth_admin, auth);
// Ruta: http://localhost:3001/getadmin/auth
router.get("/categoria/:id", categoriaById);
// Ruta: http://localhost:3001/getadmin/categoria/:id
router.get("/subcategoria/:id", subcategoriaById);
// Ruta: http://localhost:3001/getadmin/subcategoria/:id
router.get("/pais/:id", paisById);
// Ruta: http://localhost:3001/getadmin/pais/:id
router.get("/ciudad/:id", ciudadById);
// Ruta: http://localhost:3001/getadmin/ciudad/:id


module.exports = router;
