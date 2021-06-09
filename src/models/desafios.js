const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('desafios'),{
        nombre_desafio:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },  
        descripcion_desafio:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        fecha_inicial:{
            type: DataTypes.DATE,
            allowNull: false,
            unique: false,
        },
        fecha_final:{
            type: DataTypes.DATE,
            allowNull: false,
            unique: false,
        },
        //id producto
        //id ciudad
        //id cliente
        puntos_ganar:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        cantidad_precios:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        url_image:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },

    };
};