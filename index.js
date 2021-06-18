const server = require("./src/app.js");
const { conn } = require("./src/db");
const {
  unidades,
  tipo_usuarios,
  familias,
  categorias,
  subcategoria,
  productos,
  desafios,
  clientes,
  regiones,
  monedas,
  paises,
  generos,
  usuarios,
  detalle_desafios,
  precios,
  tipo_transaccion,
  transacciones_puntos,
} = require("./src/datos");
const { ciudades } = require("./src/datosciudades");
const {
  Unidad_medida,
  Tipo_usuario,
  Familia,
  Categoria,
  Subcategoria,
  Productos,
  Desafios,
  Clientes,
  Regiones,
  Moneda,
  Paises,
  Ciudad,
  Generos,
  Usuarios,
  Detalle,
  Precio,
  Tipo_transaccion,
  Transacciones,
} = require("./src/db");

//-------------------------------------------------------------------//
//------------------CREACION DE LOS MODELOS EN LA DB-----------------//
//---------------CONECCION DEL SERVIDOR AL PUERTO 3001---------------//
//-------------------------------------------------------------------//

conn
  .sync({ force: true })
  .then(async () => {
    //----------CARGAMOS LOS DATOS FAKE A LA DB------------//
    await Unidad_medida.bulkCreate(unidades).then(
      console.log("Carga de datos correcta unidades")
    );
    await Tipo_usuario.bulkCreate(tipo_usuarios).then(
      console.log("Carga de datos correcta tipo_usuarios")
    );
    await Familia.bulkCreate(familias).then(
      console.log("Carga de datos correcta Familia")
    );
    await Categoria.bulkCreate(categorias).then(
      console.log("Carga de datos correcta categorias")
    );
    await Subcategoria.bulkCreate(subcategoria).then(
      console.log("Carga de datos correcta subcategoria")
    );
    await Productos.bulkCreate(productos).then(
      console.log("Carga de datos correcta productos")
    );
    await Regiones.bulkCreate(regiones).then(
      console.log("Carga de datos correcta regiones")
    );
    await Moneda.bulkCreate(monedas).then(
      console.log("Carga de datos correcta monedas")
    );
    await Paises.bulkCreate(paises).then(
      console.log("Carga de datos correcta paises")
    );
    await Ciudad.bulkCreate(ciudades).then(
      console.log("Carga de datos correcta ciudades")
    );
    await Generos.bulkCreate(generos).then(
      console.log("Carga de datos correcta generos")
    );
    await Usuarios.bulkCreate(usuarios).then(
      console.log("Carga de datos correcta usuarios")
    );
    await Clientes.bulkCreate(clientes).then(
      console.log("Carga de datos correcta clientes")
    );
    await Desafios.bulkCreate(desafios).then(
      console.log("Carga de datos correcta desafios")
    );
    await Detalle.bulkCreate(detalle_desafios).then(
      console.log("Carga de datos correcta detalle_desafios")
    );
    await Precio.bulkCreate(precios).then(
      console.log("Carga de datos correcta precios")
    );
    await Tipo_transaccion.bulkCreate(tipo_transaccion).then(
      console.log("Carga de datos correcta tipo_transaccion")
    );
    await Transacciones.bulkCreate(transacciones_puntos).then(
      console.log("Carga de datos correcta transacciones_puntos")
    );

const port = process.env.PORT || 3001;
    server.listen(port, () => {
      console.log("listen at 3001");
    });
  })
  .catch((error) => console.log(error));
