const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('ciudad',{

        Ciudad:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },

    });
}