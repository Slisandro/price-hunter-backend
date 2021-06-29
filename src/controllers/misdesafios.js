const { Desafios } = require('../db');
// const {OAuth2Client} = require('google-auth-library');



async function Misdesafios(req, res, next) {
    
    const idCliente = req.cliente.id
    // const id = 1;
    try {
        
        const desafios = await Desafios.findAll({
            where:{
                clienteId: idCliente
            }
        })

        res.send(desafios);

    } catch (error) {
        next(error)
    }
}


module.exports = {
    Misdesafios,
};