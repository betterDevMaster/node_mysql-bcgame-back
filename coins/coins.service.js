const config = require("config.json");
const db = require("_helpers/db");
const fs = require("fs");

module.exports = {
  create,
  getAll,
  getAllSwitchCoins,
  getById,
  saveAll,
  update,
  delete: _delete,
};

async function create(params) {
  // initialize
  await db.Coin.update({ selected: 0 }, {
    where: {
      selected: 1
    }
  });

  // update with name
  await db.Coin.update({ selected: 1 }, {
    where: {
      name: params
    }
  });
  return getAll()
}

async function getAll() {
  return await db.Coin.findAll();
}

async function getAllSwitchCoins() {
  return await db.SwitchCoin.findAll();
}

async function saveAll(params) {
  // validate
  if (
    await db.Coin.findOne({
      where: {
        symbol: params.symbol,
        name: params.name,
      },
    })
  ) {
    throw 'Coin Name "' + params.name + '" is already taken';
  }
  // save user
  await db.Coin.create(params);
}

async function update(id, params) {
  const coin = await getById(id);
  // copy params to user and save
  Object.assign(coin, params);
  await coin.save();
  return getAll();
}

async function getById(id) {
  const coin = await db.Coin.findByPk(id);
  if (!coin) throw "Coin not found";
  return coin;
}

async function _delete(id) {
  const coin = await getById(id);
  let urls = coin.dataValues.url.split("/");
  let dir = urls.slice(-4).join("/");
  if (fs.existsSync(dir)) fs.unlinkSync(dir);
  await coin.destroy();
  return getAll();
}
