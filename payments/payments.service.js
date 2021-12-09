const config = require("config.json");
const db = require("_helpers/db");
const fs = require("fs");

module.exports = {
  addDeposit,
  getAll,
  getById,
  saveAll,
  update,
  delete: _delete,
};

async function addDeposit(params) {
  const where = { userId: params.userId, coinId: params.coinId };

  await db.Payment.findOne({ where }).then((payment) => {
    // update
    console.log("add ----", payment.price, params.price);
    if (payment) {
      params.price = parseFloat(payment.price) + params.price;
      return payment.update(params);
    }
    // insert
    return db.Payment.create(params);
  });
  return getAll();
}

async function getAll() {
  return await db.Payment.findAll();
}

async function saveAll(params) {
  // validate
  if (
    await db.Payment.findOne({
      where: {
        name: params.name,
        paymentType: params.paymentType,
        paymentUrl: params.paymentUrl,
      },
    })
  ) {
    throw 'Payment Name "' + params.name + '" is already taken';
  }
  // save user
  await db.Payment.create(params);
}

async function update(params) {
  const payment = await getById(params.id);
  // copy params to user and save
  Object.assign(payment, params);
  await payment.save();
}

async function getById(id) {
  const payment = await db.Payment.findByPk(id);
  if (!payment) throw "Payment not found";
  return payment;
}

async function _delete(id) {
  const payment = await getById(id);
  let iconUrls = payment.dataValues.icon.split("/");
  let imageUrls = payment.dataValues.image.split("/");
  let iconDir = iconUrls.slice(-4).join("/");
  let imageDir = imageUrls.slice(-4).join("/");
  if (fs.existsSync(iconDir)) fs.unlinkSync(iconDir);
  if (fs.existsSync(imageDir)) fs.unlinkSync(imageDir);
  await payment.destroy();
  return getAll();
}
