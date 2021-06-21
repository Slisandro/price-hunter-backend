const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('generos',{

        genero:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

    });
}