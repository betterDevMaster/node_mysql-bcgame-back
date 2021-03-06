const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    depositCoinId: { type: DataTypes.TINYINT, defaultValue: 1 },
    topCoinId: { type: DataTypes.TINYINT, defaultValue: 1 },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    hash: { type: DataTypes.STRING, allowNull: false },
    profilePicURL: { type: DataTypes.TEXT("long"), allowNull: true },
    social: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    mobile: { type: DataTypes.STRING, allowNull: true },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: "GUEST" },
    // publicKey: { type: DataTypes.STRING, allowNull: false },
    // privateKey: { type: DataTypes.STRING, allowNull: false },
    ethereumAddr: { type: DataTypes.STRING, allowNull: true },
    tronAddr: { type: DataTypes.STRING, allowNull: true },
    bitcoinAddr: { type: DataTypes.STRING, allowNull: true },
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

  return sequelize.define("User", attributes, options);
}
