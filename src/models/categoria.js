const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('categoria',{
        nombre_categoria:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },  
        descripcion:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
    });
}