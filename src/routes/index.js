const { Router } = require("express");
const productos = require("./productos");
const categorias = require("./categorias");
const subcategoria = require("./subcategoria.js");
const usuarios = require("./usuarios");
const generos = require("./genero");
const unidad_medida = require("./unidad_medida");
const tipo_usuario = require("./tipo_usuarios");
const paises = require("./paises");
const monedas = require("./monedas");
const ciudades = require("./ciudades");
const clientes = require("./clientes");
const tipo_transaccion = require("./tipo_transaccion");
const transacciones = require("./transacciones");
const crear_producto = require("./crearproducto");
const precios = require("./precios");

const rutas_post = require("./admin/rutas_admin.js");

const router = Router();

router.use("/", productos);
router.use("/", categorias);
router.use("/", subcategoria);
router.use("/", usuarios); //
router.use("/", generos);
router.use("/", unidad_medida);
router.use("/", tipo_usuario);
router.use("/", paises);
router.use("/", monedas);
router.use("/", ciudades);
router.use("/", clientes);
router.use("/", tipo_transaccion);
router.use("/", transacciones);
router.use("/", clientes);
router.use("/", crear_producto);
router.use("/", precios);

router.use("/admin", rutas_post);

module.exports = router;
