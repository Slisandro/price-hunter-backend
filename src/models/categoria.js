const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('categoria'),{
        nombre_categoria:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },  
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },

        // id_familia:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
    };
}