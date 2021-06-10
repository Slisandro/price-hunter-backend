
const server = require('./src/app.js');
const {conn} = require("./src/db");
const {unidades, tipo_usuarios, familias, categorias, subcategoria, productos} = require("./src/datos")
const {Unidad_medida, Tipo_usuario, Familia, Categoria, Subcategoria, Productos} = require("./src/db")



//-------------------------------------------------------------------//
//------------------CREACION DE LOS MODELOS EN LA DB-----------------//
//---------------CONECCION DEL SERVIDOR AL PUERTO 3001---------------//
//-------------------------------------------------------------------//

conn.sync({ force: true })
.then(()=>{

    //----------CARGAMOS LOS DATOS FAKE A LA DB------------//
    Unidad_medida.bulkCreate(unidades).then(console.log('Carga de datos correcta unidades'))
    Tipo_usuario.bulkCreate(tipo_usuarios).then(console.log('Carga de datos correcta tipo_usuarios'))
    Familia.bulkCreate(familias).then(console.log('Carga de datos correcta Familia'))
    // Categoria.bulkCreate(categorias).then(console.log('Carga de datos correcta categorias'))
    // Subcategoria.bulkCreate(subcategoria).then(console.log('Carga de datos correcta subcategoria'))
    // Productos.bulkCreate(productos).then(console.log('Carga de datos correcta productos'))
    

    server.listen(3001, ()=>{
        console.log("listen at 3001")
    })
})
