
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('detalle',{
        puntos_ganar:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        id_desafio:{
            type: DataTypes.INTEGER,
            allowNull: false,
            // unique: true,
        },
        id_ciudad:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        cantidad_precios:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
    });
};