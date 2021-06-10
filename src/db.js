require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

//------------------------------------//
//--------Coneccion con la DB---------//
//------------------------------------//
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

//------------------------------------//
//---------Compruevo conección--------//
//------------------------------------//
sequelize.authenticate()
  .then(() => { console.log('success') })
  .catch((e) => { console.log(e) });

//------------------------------------//
//--------Carga de los modelos--------//
//------------------------------------//
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Precio, Moneda, Familia, Categoria,
  Ciudad, Clientes, Desafios, Paises,
  Productos, Subcategoria, Tipo_usuario,
  Unidad_medida, Usuarios, // el archivo unidadesmedida.js exporta Unidad_medida
} = sequelize.models;

//------------------------------------//
//------Relaciones entre Modelos------//
//------------------------------------//
//los tenemos que hacer//

// inicio  relaciones de muchos a muchos -------------------------->
// relación de muchos a muchos de precios a usuarios
Precio.belongsToMany(Usuarios, { through: "precioUsuario" });
Usuarios.belongsToMany(Precio, { through: "precioUsuario" });
// relación de muchos a muchos de usuarios a desafíos
Desafios.belongsToMany(Usuarios, { through: "desafioUsuario" });
Usuarios.belongsToMany(Desafios, { through: "desafioUsuario" });
// relación de muchos a muchos de desafíos a ciudades
Desafios.belongsToMany(Ciudad, { through: "desafioCiudad" });
Ciudad.belongsToMany(Desafios, { through: "desafioCiudad" });
// final  relaciones de muchos a muchos --------------------------->

// inicio relaciones uno a muchos --------------------------------->
// relación tipos de usuarios 
Tipo_usuario.hasMany(Usuarios);
Tipo_usuario.hasMany(Clientes);
Tipo_usuario.hasMany(Desafios);
// relación ciudad
Ciudad.hasMany(Usuarios);
Ciudad.hasMany(Clientes);
// relación países 
Paises.hasMany(Ciudad);
// relación desafíos
Clientes.hasMany(Desafios);
Desafios.hasMany(Precio);
Productos.hasMany(Desafios);
// relación productos y categorías
Unidad_medida.hasMany(Productos);
Subcategoria.hasMany(Productos);
Categoria.hasMany(Subcategoria);
Familia.hasMany(Categoria);
// final relaciones uno a muchos ---------------------------------->

// inicio relaciones uno a uno --------------------------------->
Paises.belongsTo(Moneda)
// final relaciones uno a uno ---------------------------------->


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};