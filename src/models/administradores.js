const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('administradores',{
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        // id_tipo_usuario:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};