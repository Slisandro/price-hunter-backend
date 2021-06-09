const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('subcategoria'),{
        nombre_subcategoria:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },  
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },

        // id_categoria:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
    };
}