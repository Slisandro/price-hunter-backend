const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('paises'),
    {
        codigo_alfa:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true, 

        },
        nombre_pais:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // codigo_moneda:{
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true,
        // },
    };
}