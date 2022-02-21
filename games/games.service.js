const config = require("config.json");
const db = require("_helpers/db");
const fs = require("fs");

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
  if (
    await db.Game.findOne({
      where: {
        name: params.name,
        gameType: params.gameType,
        gameUrl: params.gameUrl,
      },
    })
  ) {
    throw 'Game Name "' + params.name + '" is already taken';
  }
  // save user
  await db.Game.create(params);
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
  let iconUrls = game.dataValues.icon.split("/");
  let imageUrls = game.dataValues.image.split("/");
  let iconDir = iconUrls.slice(-4).join("/");
  let imageDir = imageUrls.slice(-4).join("/");
  if (fs.existsSync(iconDir)) fs.unlinkSync(iconDir);
  if (fs.existsSync(imageDir)) fs.unlinkSync(imageDir);
  await game.destroy();
  return getAll();
}
