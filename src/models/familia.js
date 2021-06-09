const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('familia'),{
        nombre_familia:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },  
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
    };
};