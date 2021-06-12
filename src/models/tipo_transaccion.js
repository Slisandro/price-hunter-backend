const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('tipo_transaccion',{
        tipo_transaccion:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
    });
};