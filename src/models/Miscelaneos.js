const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('miscelaneos',{

        campo:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        dato:{
            type: DataTypes.STRING,
            allowNull: false, 
        }

    });
}