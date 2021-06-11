const {Subcategoria, Categoria, Familia} = require('../db'); //fijarnos el nombre con que lo pone pablo.

function categorias (req, res, next){

    Familia.findAll({
        attributes:['nombre_familia', 'id'],
        include:{
            model: Categoria,
            attributes: ['nombre_categoria', 'id'],
            include:{
                model: Subcategoria,
                attributes:['nombre_subcategoria', 'id']
            }
        }
    })
    .then((respuesta)=>{
        res.send(respuesta)
    })
    .catch((err)=>{
        console.log(err);
    })

}
module.exports = {
    categorias,
};