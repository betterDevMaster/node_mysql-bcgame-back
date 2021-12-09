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
  updateDefaultCoin,
};

async function authenticate({ email, password }) {
  const user = await db.User.scope("withHash").findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.hash)))
    throw "Email or Password is incorrect";

  // authentication successful
  const token = jwt.sign({ userId: user.id }, config.secret, {
    expiresIn: "7d",
  });
  return { ...omitHash(user.get()), token };
}

async function profile(req) {
  try {
    let { authorization, Authorization } = req.headers;
    let auth = (Authorization = authorization);
    if (auth) {
      const accessToken = auth.split(" ")[1];
      const { userId } = jwt.verify(accessToken, config.secret);
      const user = await db.User.findOne({
        where: { id: userId },
      });

      if (!user) {
        throw "Invalid authorization token";
      }
      return { ...omitHash(user.get()) };
    } else throw "Invalid authorization token";
  } catch (err) {
    throw "Internal server error" + err;
  }
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
  const user = await db.User.create(params);
  const coin = { userId: user.id, coinId: 1 };
  await db.UserCoin.create(coin);
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

  await db.UserCoin.findOne({ where }).then((user) => {
    // update
    if (user) {
      params.status = user.status === 0 ? 1 : 0;
      return user.update(params);
    }
    // insert
    return db.UserCoin.create(params);
  });

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
        attributes: [
          "name",
          "content",
          "description",
          "oriName",
          "type",
          "size",
          "url",
        ],
        required: false,
        right: true,
      },
    ],
  });
  return user;
}

async function updateDefaultCoin(id, params) {
  const user = await getUser(id);
  // copy params to user and save
  Object.assign(user, params);
  await user.save();
  return user;
}
