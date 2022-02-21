const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: "User",

        // This is the column name of the referenced model
        key: "id",
      },
    },
    coinId: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: "Coin",

        // This is the column name of the referenced model
        key: "id",
      },
    },
    jbPrice: { type: DataTypes.DECIMAL(24, 3), defaultValue: 0 },
    usdPrice: { type: DataTypes.DECIMAL(24, 3), defaultValue: 0 },
    status: { type: DataTypes.TINYINT, defaultValue: 1 },
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

  return sequelize.define("UserCoin", attributes, options);
}
