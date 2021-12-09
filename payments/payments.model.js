const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    depositBonusId: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    coinId: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    coinName: { type: DataTypes.STRING, allowNull: false },
    requestId: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(24, 3), defaultValue: 0 },
  };

  const options = {
    defaultScope: {
      // exclude hash by default
      attributes: { exclude: ["hash"] },
    },
    scopes: {
      // include hash with this scope
      withHash: { attributes: {} },
    },
    freezeTableName: true,
  };

  return sequelize.define("Payment", attributes, options);
}
