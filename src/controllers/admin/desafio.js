const { Desafios } = require('../../db')

async function desafio(req, res, next) {
 try {
     const { nombre_desafio, descripcion_desafio, fecha_inicial, fecha_final, url_image, clienteId, productoId } = req.body
     const desafio = await Desafios.findOrCreate({
         where: {
            nombre_desafio,
            descripcion_desafio,
            fecha_inicial,
            fecha_final,
            url_image,
            clienteId,
            productoId     
         }
        
        })     
     res.json(desafio)
 } catch (error) {
      next(error)
 }
}


module.exports = {
  desafio,
};