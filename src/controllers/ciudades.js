const {Ciudad} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function ciudades (req, res, next){
    let idPais;
    if (req.params.id) {idPais = req.params.id.toUpperCase()
        Ciudad.findAll({
            attributes:['Ciudad', 'id', 'paiseCodigoAlfa'],
            where: {
                paiseCodigoAlfa: idPais,
            },
        }) 
        .then((respuesta)=>{
            // console.log(respuesta);
            res.send(respuesta[0]? respuesta : 'no hay seleccion')
        })
        .catch((err)=>{
            console.log(err);
        })
    }else{
        res.send('no hay seleccion')
    }

}
module.exports = {
    ciudades,
};