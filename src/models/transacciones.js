const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('transacciones',{
        observacion:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },  
        // id_usuario:{//  quitar despues de la relacion
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
        puntos:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        // id_tipo_transaccion:{ //  quitar despues de la relacion
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: false,
        // }, 
    });
};