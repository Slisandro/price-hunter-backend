
const server = require('./src/app.js');
const {conn} = require("./src/db");
const {ciudades, paises, monedas, regiones, clientes, generos, usuarios, precios, detalle_desafios, desafios, unidades, tipo_usuarios, familias, categorias, subcategoria, productos} = require("./src/datos")
const {Precio, Moneda, Familia, Categoria,
    Ciudad, Clientes, Desafios, Paises,
    Productos, Subcategoria, Tipo_usuario,
    Unidad_medida, Usuarios} = require("./src/db");




//-------------------------------------------------------------------//
//------------------CREACION DE LOS MODELOS EN LA DB-----------------//
//---------------CONECCION DEL SERVIDOR AL PUERTO 3001---------------//
//-------------------------------------------------------------------//

conn.sync({ force: true })
.then(async ()=>{

    //----------CARGAMOS LOS DATOS FAKE A LA DB------------//
    await Unidad_medida.bulkCreate(unidades).then(console.log('Carga de datos correcta unidades'))
    await Tipo_usuario.bulkCreate(tipo_usuarios).then(console.log('Carga de datos correcta tipo_usuarios'))
    await Familia.bulkCreate(familias).then(console.log('Carga de datos correcta Familia'))
    await Categoria.bulkCreate(categorias).then(console.log('Carga de datos correcta categorias'))
    await Subcategoria.bulkCreate(subcategoria).then(console.log('Carga de datos correcta subcategoria'))
    await Productos.bulkCreate(productos).then(console.log('Carga de datos correcta productos'))
    await Moneda.bulkCreate(monedas).then(console.log('Carga de datos correcta Moneda'))
    await Ciudad.bulkCreate(ciudades).then(console.log('Carga de datos correcta Ciudad'))


    // await Precio.bulkCreate(precios).then(console.log('Carga de datos correcta Precio'))
    await Paises.bulkCreate(paises).then(console.log('Carga de datos correcta Paises'))

    server.listen(3001, ()=>{
        console.log("listen at 3001")
    })
}).catch(error => console.log(error))
