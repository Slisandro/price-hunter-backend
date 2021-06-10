const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('ciudad',{
        // codigo_postal:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        //     primaryKey: true, 
        // },
        nombre_ciudad:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        // codigo_alfa:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
    });
}