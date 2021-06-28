const {
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
} = require("../../controllers/admin/rutas_put.js");
const { Router } = require("express");
const router = Router();
const { auth_admin } = require('../../midelwares/auth')

router.put("/familia", auth_admin, put_familia);
// Ruta: http://localhost:3001/putadmin/familia
router.put("/categoria", auth_admin, put_categoria);
// Ruta: http://localhost:3001/putadmin/categoria
router.put("/subcategoria", auth_admin, put_subcategoria);
// Ruta: http://localhost:3001/putadmin/subcategoria
router.put("/productos", auth_admin, put_productos);
// Ruta: http://localhost:3001/getadmin/productos
router.put("/paises", auth_admin, put_paises);
// Ruta: http://localhost:3001/getadmin/paises
router.put("/region", auth_admin, put_region);
// Ruta: http://localhost:3001/getadmin/region
router.put("/ciudad", auth_admin, put_ciudad);
// Ruta: http://localhost:3001/getadmin/ciudad
router.put("/monedas", auth_admin, put_monedas);
// Ruta: http://localhost:3001/getadmin/monedas
router.put("/tipo_usuario", auth_admin, put_tipo_usuario);
// Ruta: http://localhost:3001/getadmin/tipo_usuario
router.put("/um", auth_admin, put_unidad_medida);
// Ruta: http://localhost:3001/getadmin/um
router.put("/genero", auth_admin, put_generos);
// Ruta: http://localhost:3001/getadmin/genero
router.put("/tipo_transaccion", auth_admin, put_tipo_transaccion);
// Ruta: http://localhost:3001/getadmin/tipo_transaccion
router.put("/transaccion", auth_admin, put_transaccion);
// Ruta: http://localhost:3001/getadmin/transaccion
router.put("/clientes", auth_admin, put_clientes);
// Ruta: http://localhost:3001/getadmin/clientes
router.put("/desafios", auth_admin, put_desafios);
// Ruta: http://localhost:3001/getadmin/desafios

module.exports = router;
