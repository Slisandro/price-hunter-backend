const {Generos} = require('../db');

function generos (req, res, next){
    Generos.findAll({
        attributes: ['genero', 'id'],
    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = {
    generos,
};