const {Ciudad, Paises} = require('../db');

async function ListarCiudades(req,res,next){
    
    try {
        const paises_ciudades = await Paises.findAll({
            attributes:["codigo_alfa", "nombre_pais"],
            include:{
                model: Ciudad,
                attributes:["id", "ciudad"]
            }
        });
        res.send(paises_ciudades);
    } catch (error) {
        next(error);
    }

};

module.exports = {
    ListarCiudades,
};