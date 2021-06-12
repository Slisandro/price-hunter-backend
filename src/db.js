require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { default: axios } = require('axios');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

//------------------------------------//
//--------Coneccion con la DB---------//
//------------------------------------//

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

//------------------------------------//
//---------Compruevo conección--------//
//------------------------------------//

sequelize
  .authenticate()
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log(e);
  });

//------------------------------------//
//--------Carga de los modelos--------//
//------------------------------------//
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Tipo_transaccion,
  Transacciones,
  Precio,
  Moneda,
  Familia,
  Categoria,
  Ciudad,
  Clientes,
  Desafios,
  Paises,
  Productos,
  Subcategoria,
  Tipo_usuario,
  Unidad_medida,
  Usuarios,
  Detalle,
  Regiones,
  Generos,
  // el archivo unidadesmedida.js exporta Unidad_medida
} = sequelize.models;

//------------------------------------//
//------Relaciones entre Modelos------//
//------------------------------------//
//los tenemos que hacer//

// inicio  relaciones de muchos a muchos -------------------------->
// relación de muchos a muchos de precios a usuarios
// Precio.belongsToMany(Usuarios, { through: "precioUsuario" });
// Usuarios.belongsToMany(Precio, { through: "precioUsuario" });

// relación de muchos a muchos de usuarios a desafíos
Desafios.belongsToMany(Usuarios, { through: "desafioUsuario" });
Usuarios.belongsToMany(Desafios, { through: "desafioUsuario" });
// relación de muchos a muchos de desafíos a ciudades
Desafios.belongsToMany(Ciudad, { through: "desafioCiudad" });
Ciudad.belongsToMany(Desafios, { through: "desafioCiudad" });
// final  relaciones de muchos a muchos --------------------------->

Ciudad.hasMany(Clientes);//-------

// inicio relaciones uno a muchos --------------------------------->
// relación tipos de usuarios
Tipo_usuario.hasMany(Usuarios);
Usuarios.belongsTo(Tipo_usuario);

Tipo_usuario.hasMany(Clientes);
Clientes.belongsTo(Tipo_usuario);

// Tipo_usuario.hasMany(Desafios);
// Desafios.belongsTo(Tipo_usuario);

// relación ciudad
Ciudad.hasMany(Usuarios);
Usuarios.belongsTo(Ciudad);

Ciudad.hasMany(Clientes);
Clientes.belongsTo(Ciudad);
// relación países
Paises.hasMany(Ciudad);
Ciudad.belongsTo(Paises);
// relación desafíos
Clientes.hasMany(Desafios);
Desafios.belongsTo(Clientes);

Desafios.hasMany(Precio);
Precio.belongsTo(Desafios);

Desafios.hasMany(Detalle);
Detalle.belongsTo(Desafios);

Ciudad.hasMany(Detalle);
Detalle.belongsTo(Ciudad);

Productos.hasMany(Desafios);
Desafios.belongsTo(Productos);

Tipo_usuario.hasMany(Clientes);
Clientes.belongsTo(Tipo_usuario);

//--realcion region paises---//
Regiones.hasMany(Paises);
Paises.belongsTo(Regiones);

// relación productos y categorías
Unidad_medida.hasMany(Productos);
Productos.belongsTo(Unidad_medida);

Subcategoria.hasMany(Productos);
Productos.belongsTo(Subcategoria);

Categoria.hasMany(Subcategoria);
Subcategoria.belongsTo(Categoria);

Generos.hasMany(Usuarios);
Usuarios.belongsTo(Generos);

Familia.hasMany(Categoria);
Categoria.belongsTo(Familia);

Usuarios.hasMany(Precio);
Precio.belongsTo(Usuarios);

//Monedero
Usuarios.hasMany(Transacciones);
Transacciones.belongsTo(Usuarios);

Tipo_transaccion.hasMany(Transacciones);
Transacciones.belongsTo(Tipo_transaccion);

// final relaciones uno a muchos ---------------------------------->

// inicio relaciones uno a uno --------------------------------->
Moneda.hasOne(Paises);
// final relaciones uno a uno ---------------------------------->

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

