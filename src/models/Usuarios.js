const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  return sequelize.define("usuarios", {
    id:{
     type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fecha_de_nacimiento: {
      type: DataTypes.DATE, //-----------------
      allowNull: false,
    },
    // id_ciudad: {           //------------------
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // id_genero: {           //-------------------
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // id_tipo_de_usuario: {   //------------------
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    metodo_de_cobro: {
      type: DataTypes.STRING,
    },
    banco: {
      type: DataTypes.STRING,
    },
    numero_de_cuenta: {
      type: DataTypes.STRING,
    },
  });
};