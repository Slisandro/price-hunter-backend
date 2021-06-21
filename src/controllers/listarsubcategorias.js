const {Subcategoria} = require('../db');

async function ListarSubCategorias(req,res,next){

    try {
        
        const subcategorias = await Subcategoria.findAll({
            attributes:["id", "nombre_subcategoria"]
        });
        res.send(subcategorias);

    } catch (error) {
        next(error);
    }

};

module.exports = {
    ListarSubCategorias,
};