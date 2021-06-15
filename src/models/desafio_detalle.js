
const { DataTypes } = require('sequelize');
const Desafios = require("./desafios")
const Ciudad = require("./ciudad")

module.exports = (sequelize) => {

    return sequelize.define('detalle',{

        desafioId: {
            type: DataTypes.INTEGER,
            references: {
              model: Desafios, // id de la tabla de Desafios (esto hace que se vinculen).
              key: 'id'
            }
        },

        ciudadId: {
            type: DataTypes.INTEGER,
            references: {
              model: Ciudad, // id de la tabla de Ciudades (esto hace que se vinculen).
              key: 'id'
            }
        },

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
    });
};