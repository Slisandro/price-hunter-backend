const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le injertamos la conexión a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    return sequelize.define('moneda', {
        codigo_moneda: { // codigo_moneda es obligatorio, único. === id tabla
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        nombre_moneda: { // nombre moneda es obligatorio, único
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        simbolo: { // no es obligatorio, revisar luego.
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
