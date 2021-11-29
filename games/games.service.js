const config = require("config.json");
const db = require("_helpers/db");

module.exports = {
  create,
  getAll,
  getById,
  saveAll,
  update,
  delete: _delete
};

async function create(params) {
  // validate
  if (await db.Game.findOne({ where: { name: params.name } })) {
    throw 'Game Name "' + params.name + '" is already taken';
  }

  // if (!params.hasOwnProperty("profilePicURL"))
  //     params.profilePicURL = ''
  // save user
  await db.Game.create(params);
}

async function getAll() {
  return await db.Game.findAll();
}

async function saveAll(params) {
  // validate
  if (await db.Game.findOne({ where: { name: params.name, gameType: params.gameType, gameUrl: params.gameUrl } })) {
    throw 'Game Name "' + params.name + '" is already taken';
  }
  // save user
  await db.Game.create(params);
  //   if (params) {
  //     // truncate games
  //     await db.Game.destroy({
  //       where: {},
  //       truncate: true,
  //     });

  //     // save games
  //     await db.Game.bulkCreate(params);

  //   } else {
  //     throw "Data not found";
  //   }
}

async function update(params) {
  const game = await getById(params.id);
    // copy params to user and save
    Object.assign(game, params);
    await game.save();
}

async function getById(id) {
  const game = await db.Game.findByPk(id);
  if (!game) throw "Game not found";
  return game;
}

async function _delete(id) {
  const game = await getById(id);
  await game.destroy();
}