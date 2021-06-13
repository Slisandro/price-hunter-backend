const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('ciudad',{

        ciudad:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },

    });
}