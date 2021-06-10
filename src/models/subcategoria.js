const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('subcategoria',{
        nombre_subcategoria:{
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true,
        },  
        descripcion:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
    });
}