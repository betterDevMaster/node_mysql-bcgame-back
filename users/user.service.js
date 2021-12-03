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
  getCoins,
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
}

async function update(id, params) {
  const user = await getUser(id);
  // copy params to user and save
  Object.assign(user, params);
  await user.save();
  const result = await user.get();
  return omitHash(result);
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
  const user = await db.UserDetail.findOne({
    where: { userId: params.userId },
  });
  if (user) {
    const strs = user.dataValues.coinIds.split(",");
    const filtered = strs.filter((f) => parseInt(f) === params.coinIds);
    var newCoins;
    if (filtered.length > 0) {
      newCoins = strs
        .reduce(function (acc, curr, index) {
          if (parseInt(curr) !== params.coinIds) acc.push(curr);
          return acc;
        }, [])
        .join(",");
    } else {
      newCoins = user.dataValues.coinIds + params.coinIds + ",";
    }
    params.coinIds = newCoins;
    // update user
    Object.assign(user, params);
    await user.save();
    return await user.get();
  } else {
    // save user
    params.coinIds = params.coinIds + ",";
    await db.UserDetail.create(params);
    return params;
  }
}

async function getCoins(id) {
  const user = await db.UserDetail.findOne({
    where: { userId: id },
  });
  return user;
}
