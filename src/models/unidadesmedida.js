const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('unidad_medida',{
        codigo_unidad_medida:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },  
        nombre_unidad:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
};