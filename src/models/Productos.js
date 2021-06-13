const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  return sequelize.define("productos", {
    
    // id_producto: {           //------------
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   primaryKey: true,	
    // },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido_neto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    // unidad_medida: {          //-----------
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // id_subcategoria: {           //---------
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },

  });
};