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
const crear_desafio = require("./creardesafio.js")
const detalle_desafio = require("./detalledesafio")
const precios = require("./precios");
const rutas_post = require("./admin/rutas_admin.js");
const rutas_get = require("./admin/rutas_admin_get.js");
const rutas_put = require("./admin/rutas_admin_put.js");
const listar_productos = require("../routes/listarproductos");
const listar_ciudades_cliente = require("./ciudades-form-cliente");
const listar_sub_categorias = require("./listar-subcategorias");
const estadisticacliente = require("./estatisticas_cliente")
const logIn = require("./login");
const  registroAdmin = require("./admin/registroAdmin");

const misdesafios = require("./misdesafios");

const  registroGoogle = require("./registroGoogle");


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
router.use("/", crear_desafio);
router.use("/", detalle_desafio);
router.use("/", estadisticacliente);
//-----lista de productos para form cliente-----//
router.use("/", listar_productos);
//----------------------------------------------//

//-----lista de ciudades para form cliente-----//
router.use("/", listar_ciudades_cliente);
//----------------------------------------------//

//-----lista de subcategorias para form cliente/Nuevo Producto-----//
router.use("/", listar_sub_categorias);
//----------------------------------------------//

//-----lista de misdesafios para el panel cliente-----//
router.use("/", misdesafios);
//----------------------------------------------//

router.use("/", registroAdmin)
router.use("/admin", rutas_post);
router.use("/getadmin", rutas_get);
router.use("/putadmin", rutas_put);

router.use("/", logIn)

router.use("/", registroGoogle)


module.exports = router;
