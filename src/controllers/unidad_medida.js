const {Unidad_medida} = require('../db');

function unidad_medida (req, res, next){
    Unidad_medida.findAll({
        attributes: ['codigo_unidad_medida', 'nombre_unidad'],
    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = {
    unidad_medida,
};