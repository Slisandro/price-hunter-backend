const { Clientes } = require('../../db')

async function clientes(req, res, next) {
 try {
     const { razon_social, nombre_cial_fantasia, cuit_nit_rut, email, telefono, direccion_fiscal, metodo_pago, banco, numero_cuenta, password, ciudadId, tipoUsuarioId } = req.body
     const categoria = await Clientes.create({
        razon_social,
        nombre_cial_fantasia,
        cuit_nit_rut,
        email,
        telefono,
        direccion_fiscal,
        metodo_pago,
        banco,
        numero_cuenta,
        password,
        ciudadId,
        tipoUsuarioId
     })     
     res.json(categoria)
 } catch (error) {
      next(error)
 }
}


module.exports = {
  clientes,
};