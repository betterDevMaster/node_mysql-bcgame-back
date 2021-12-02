const config = require("config.json");
const db = require("_helpers/db");

module.exports = {
  create,
  getAll,
  getById,
  saveAll,
  update,
  delete: _delete,
};

async function create(params) {
  // validate
  if (await db.Coin.findOne({ where: { name: params.name } })) {
    throw 'Coin Name "' + params.name + '" is already taken';
  }

  await db.Coin.create(params);
}

async function getAll() {
  return await db.Coin.findAll();
}

async function saveAll(params) {
  // validate
  if (
    await db.Coin.findOne({
      where: {
        name: params.name,
        coinType: params.coinType,
        coinUrl: params.coinUrl,
      },
    })
  ) {
    throw 'Coin Name "' + params.name + '" is already taken';
  }
  // save user
  await db.Coin.create(params);
  //   if (params) {
  //     // truncate coins
  //     await db.Coin.destroy({
  //       where: {},
  //       truncate: true,
  //     });

  //     // save coins
  //     await db.Coin.bulkCreate(params);

  //   } else {
  //     throw "Data not found";
  //   }
}

async function update(params) {
  const coin = await getById(params.id);
  // copy params to user and save
  Object.assign(coin, params);
  await coin.save();
}

async function getById(id) {
  const coin = await db.Coin.findByPk(id);
  if (!coin) throw "Coin not found";
  return coin;
}

async function _delete(id) {
  const coin = await getById(id);
  await coin.destroy();
}
