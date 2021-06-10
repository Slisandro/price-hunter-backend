const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    return sequelize.define('clientes',{
        razon_social:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nombre_cial_fantasia:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        cuit_nit_rut:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        direccion_fiscal:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // id_ciudad:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
        metodo_pago:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        banco:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        numero_cuenta:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        // id_tipo_usuario:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },      
    });
};