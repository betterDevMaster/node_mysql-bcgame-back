const config = require("config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
    // logging: console.log,
    // logging: function (str) {
    //     console.log('Sequelize console -----', str)
    // },
    logging: false,
  });

  // init models and add them to the exported db object
  db.User = require("../users/user.model")(sequelize);
  db.UserCoin = require("../users/coin.model")(sequelize);
  db.Deposit = require("../deposits/deposits.model")(sequelize);
  db.Game = require("../games/games.model")(sequelize);
  db.Coin = require("../coins/coins.model")(sequelize);
  db.SwitchCoin = require("../coins/switch.coins.model")(sequelize);
  db.Payment = require("../payments/payments.model")(sequelize);
  db.GameCurrent = require("../center/games.current.model")(sequelize);

  // sync all models with database
  await sequelize.sync();
  // await sequelize.sync({ logging: console.log });
}
