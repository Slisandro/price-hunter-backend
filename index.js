
const server = require('./src/app.js');
const {conn} = require("./src/db")



//-------------------------------------------------------------------//
//------------------CREACION DE LOS MODELOS EN LA DB-----------------//
//---------------CONECCION DEL SERVIDOR AL PUERTO 3001---------------//
//-------------------------------------------------------------------//

conn.sync({ force: true })
.then(()=>{
    server.listen(3001, ()=>{
        console.log("listen at 3001")
    })
})
