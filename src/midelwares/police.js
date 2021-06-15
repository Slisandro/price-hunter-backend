// const { Usuario } = require('../models/index');

module.exports = {
    /**
     * La función para restringir el acceso solo a los usuarios tipo 1(hunter) o 3(admin)
     * @param {*} req request con el user
     * @param {*} res respuesta en caso de error 
     * @param {*} next confirmación y continuación
     */
    restriccion(req, res, next) {
        if (req.user.tipoUsuarioId === 1 || req.user.tipoUsuarioId === 3) {
            next()
        } else {
            res.status(401).send("No estas autorizado");
        }
    },
    // /**
    //  * La función para restringir el acceso solo a los usuarios tipo 3(admin)
    //  * @param {*} req request con el admin
    //  * @param {*} res respuesta en caso de error 
    //  * @param {*} next confirmación y continuación
    //  */
    // restriccion_admin(req, res, next) {
    //     if (req.user.tipoUsuarioId === 3) {
    //         next()
    //     } else {
    //         res.status(401).send("No estas autorizado");
    //     }
    // },
    // /**
    //  * La función para restringir el acceso solo a los usuarios tipo 2(cliente) o 3(admin)
    //  * @param {*} req request con el cliente
    //  * @param {*} res respuesta en caso de error 
    //  * @param {*} next confirmación y continuación
    //  */
    // restriccion_cliente(req, res, next) {
    //     if (req.cliente.tipoUsuarioId === 2 || req.user.tipoUsuarioId === 3) {
    //         next()
    //     } else {
    //         res.status(401).send("No estas autorizado");
    //     }
    // },

}