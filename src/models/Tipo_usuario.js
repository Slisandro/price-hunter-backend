const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  return sequelize.define("tipo_usuario", {

    tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
	unique: true
    },
  });
};