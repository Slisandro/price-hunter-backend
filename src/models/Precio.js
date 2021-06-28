const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('precio', {
        latitud: { // latitud es obligatorio
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitud: { // longitud es obligatorio
            type: DataTypes.STRING,
            allowNull: false,
        },
        // fecha_hora: { // se crea con el .create
        //     type: DataTypes.DATE,
        // },
        nombre_negocio: { // no es obligatorio
            type: DataTypes.STRING,
        },
        direccion_negocio: { // no es obligatorio
            type: DataTypes.STRING,
        },
        precio: { // valor permitido es unicamente números.
            type: DataTypes.INTEGER,
        },
        // id_desafio: { // ?
        //     type: DataTypes.INTEGER,
        // },
        // id_usuario: { // ?
        //     type: DataTypes.INTEGER,
        // }
        // Id_Ciudad: { // ?
        //     type: DataTypes.INTEGER,
        // },
    });
};