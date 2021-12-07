const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const fs = require("fs");

module.exports = {
  authenticate,
  profile,
  getAll,
  getById,
  forgotPassword,
  create,
  update,
  delete: _delete,
  registerCoin,
  getCoinsByUser,
};

async function authenticate({ email, password }) {
  const user = await db.User.scope("withHash").findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.hash)))
    throw "Email or Password is incorrect";

  // authentication successful
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "7d" });
  return { ...omitHash(user.get()), token };
}

async function profile({ email }) {
  const user = await db.User.scope("withHash").findOne({ where: { email } });

  // authentication successful
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "7d" });
  return { ...omitHash(user.get()), token };
}

async function getAll() {
  return await db.User.findAll();
}

async function getById(id) {
  return await getUser(id);
}

async function forgotPassword(cond) {
  const user = await db.User.findOne({ where: cond });
  // hash password if it was entered
  const params = {};
  params.hash = await bcrypt.hash(config.defaultPassword, 10);

  // copy params to user and save
  Object.assign(user, params);
  await user.save();

  return omitHash(user.get());
}

async function create(params) {
  // validate
  if (await db.User.findOne({ where: { email: params.email } })) {
    throw 'Email "' + params.email + '" is already taken';
  }
  // hash password
  if (params.password) {
    params.hash = await bcrypt.hash(params.password, 10);
  }
  // save user
  await db.User.create(params);
  return getAll();
}

async function update(id, params) {
  const user = await getUser(id);
  // copy params to user and save
  Object.assign(user, params);
  await user.save();
  return getAll();
}

async function _delete(id) {
  const user = await getUser(id);
  let urls = user.dataValues.profilePicURL.split("/");
  let dir = urls.slice(-4).join("/");
  if (fs.existsSync(dir)) fs.unlinkSync(dir);
  await user.destroy();
  return getAll();
}

// helper functions

async function getUser(id) {
  const user = await db.User.findByPk(id);
  if (!user) throw "User not found";
  return user;
}

function omitHash(user) {
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}

async function registerCoin(params) {
  const where = { userId: params.userId, coinId: params.coinId };
  const user = await db.UserCoin.findOne({ where });
  if (user) {
    await user.destroy({ where });
  } else {
    // save user
    await db.UserCoin.create(params);
  }
  return getCoinsByUser(params.userId);
}

async function getCoinsByUser(id) {
  db.UserCoin.belongsTo(db.Coin, {
    targetKey: "id",
    foreignKey: "coinId",
  });

  const user = await db.UserCoin.findAll({
    where: { userId: id },
    include: [
      {
        model: db.Coin,
        attributes: ["name", "description", "oriName", "type", "size", "url"],
        required: false,
        right: true,
      },
    ],
  });
  return user;
}
