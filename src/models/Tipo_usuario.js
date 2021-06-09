const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  return sequelize.define("tipo_usuario", {
    
    // id_tipo_de_usuario: {          //-----------
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
	unique: true
    },
  });
};