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

router.put("/familia", put_familia);
// Ruta: http://localhost:3001/putadmin/familia
router.put("/categoria", put_categoria);
// Ruta: http://localhost:3001/putadmin/categoria
router.put("/subcategoria", put_subcategoria);
// Ruta: http://localhost:3001/putadmin/subcategoria
router.put("/productos", put_productos);
// Ruta: http://localhost:3001/getadmin/productos
router.put("/paises", put_paises);
// Ruta: http://localhost:3001/getadmin/paises
router.put("/region", put_region);
// Ruta: http://localhost:3001/getadmin/region
router.put("/ciudad", put_ciudad);
// Ruta: http://localhost:3001/getadmin/ciudad
router.put("/monedas", put_monedas);
// Ruta: http://localhost:3001/getadmin/monedas
router.put("/tipo_usuario", put_tipo_usuario);
// Ruta: http://localhost:3001/getadmin/tipo_usuario
router.put("/um", put_unidad_medida);
// Ruta: http://localhost:3001/getadmin/um
router.put("/genero", put_generos);
// Ruta: http://localhost:3001/getadmin/genero
router.put("/tipo_transaccion", put_tipo_transaccion);
// Ruta: http://localhost:3001/getadmin/tipo_transaccion
router.put("/transaccion", put_transaccion);
// Ruta: http://localhost:3001/getadmin/transaccion
router.put("/clientes", put_clientes);
// Ruta: http://localhost:3001/getadmin/clientes
router.put("/desafios", put_desafios);
// Ruta: http://localhost:3001/getadmin/desafios

module.exports = router;
