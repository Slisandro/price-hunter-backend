const {Productos, Precio, Desafios} = require('../db'); //fijarnos el nombre con que lo pone pablo.
const axios = require ("axios");

function productos(req,res,next){

    const nombre_input = req.query.name;  
    if(nombre_input !== undefined){
    Productos.findAll()
    .then(r =>{
        let array = []
        for(let i=0; i<r.length; i++){
            if(r[i].nombre.includes(nombre_input.toLowerCase())){
                array.push({
                    nombre:r[i].nombre
                    // precio:???????????????????????
                })
            }
        }
        res.send(array)
    })} else {
        Productos.findAll()
    .then(r =>{
        res.send(r)
    })}

}

module.exports = {
productos,
};