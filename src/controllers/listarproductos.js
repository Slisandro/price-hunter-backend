const {Productos, Unidad_medida} = require('../db');

async function ListarProductos(req,res,next){

    try {
        const productos = await Productos.findAll();
        res.send(productos);
    } catch (error) {
        next(error);
    }

};

module.exports = {
    ListarProductos,
};