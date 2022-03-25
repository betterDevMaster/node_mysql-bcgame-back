const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const userService = require("./user.service");
const ethers = require('ethers');
const crypto = require('crypto');
const TronWeb = require('tronweb');
const web3 = require('web3');
const CoinKey = require('coinkey');
const axios = require("axios");
// routes
router.post("/authenticate", authenticateSchema, authenticate);
router.get("/profile", authorize(), profie);
router.post("/register", registerSchema, register);
router.post("/registerByAdmin", authorize(), adminSchema, register);
router.post("/forgotPassword", emailSchema, forgotPassword);
router.get("/", authorize(), getAll);
router.get("/current", authorize(), getCurrent);
router.get("/:id", authorize(), getById);
router.put("/:id", authorize(), updateSchema, update);
router.delete("/:id", authorize(), _delete);
router.post("/registerUserCoin", authorize(), registerCoin);
router.get("/coins/:id", authorize(), getCoinsByUser);
router.put("/coins/save", authorize(), getBalanceAndSave);
router.put("/defaultCoin/:id", authorize(), updateDefaultCoin);
router.put("/userCoinPrice/:id", authorize(), updateUserCoinPrice);
// router.get("/getBalance", authorize(), getBalanceById);

module.exports = router;

web3js = new web3(new web3.providers.HttpProvider("https://rinkeby.infura.io/v3/880ef617ada54597907755ca61355d70"));
// Tron wallet
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");

function authenticateSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });
  validateRequest(req, next, schema);
}

function emailSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  });
  validateRequest(req, next, schema);
}

function profileSchema(req, res, next) {
  const schema = Joi.object({
    token: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function registerSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    ethereumkey: {
      publicKey: Joi.string(),
      privateKey: Joi.string()
    }
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    profilePicURL: Joi.string(),
  });
  validateRequest(req, next, schema);
}

function adminSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    mobile: Joi.string().min(3).max(30).required(),
    profilePicURL: Joi.string(),
    role: Joi.string(),
    password: Joi.string()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    ethereumkey: {
      publicKey: Joi.string(),
      privateKey: Joi.string()
    }
  });
  validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then((user) =>
      res.json({ user, status: true, message: "User login successfully" })
    )
    .catch(next);
}

function forgotPassword(req, res, next) {
  userService
    .forgotPassword({ email: req.body.email })
    .then(() =>
      res.json({
        status: true,
        message: "Your password has been reset. Default password is '12345678'",
      })
    )
    .catch(next);
}

function profie(req, res, next) {
  userService
    .profile(req)
    .then((user) => res.json({ user }))
    .catch(next);
}

async function register(req, res, next) {
  // Ethereum wallet
  var id = crypto.randomBytes(32).toString('hex');
  var privateKey = "0x" + id;
  var wallet = new ethers.Wallet(privateKey);
  var ethereumBalance;
  await web3js.eth.getBalance(wallet.address).then(function (wei) {
    ethereumBalance = web3js.utils.fromWei(wei, 'ether');
  })
  var ethereumAddr = JSON.stringify({ publicKey: wallet.address, privateKey: privateKey, balance: ethereumBalance })
  // Tron Wallet
  const account = TronWeb.utils.accounts.generateAccount()
  var tronAddr = JSON.stringify({ publicKey: account.address.base58, privateKey: account.privateKey })

  // BitCoin Wallet
  var wallet = new CoinKey.createRandom();
  console.log("BitCoin PrivateKey:", wallet.privateKey.toString('hex'));
  console.log("BitCoin Address:", wallet.publicAddress);
  var bitcoinAddr = JSON.stringify({ publicKey: wallet.publicAddress, privateKey: wallet.privateKey.toString('hex') })
  var regist_user = {
    ...req.body,
    ethereumAddr,
    tronAddr,
    bitcoinAddr
  }
  console.log('user---->', regist_user)

  userService
    .create(regist_user)
    .then((users) =>
      res.json({ users, status: true, message: "User registered successfully" })
    )
    .catch(next);
}


function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) => res.json({ users }))
    .catch(next);
}

function getCurrent(req, res, next) {
  res.json(req.user);
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then((user) => res.json(user))
    .catch(next);
}

function update(req, res, next) {
  userService
    .update(req.params.id, req.body)
    .then((users) =>
      res.json({ users, status: true, message: "User updated successfully" })
    )
    .catch(next);
}

function _delete(req, res, next) {
  userService
    .delete(req.params.id)
    .then((users) =>
      res.json({ users, status: true, message: "User deleted successfully" })
    )
    .catch(next);
}

function registerCoin(req, res, next) {
  userService
    .registerCoin(req.body)
    .then((coins) =>
      res.json({
        coins,
        status: true,
        message: "UserCoin registered successfully",
      })
    )
    .catch(next);
}

function getCoinsByUser(req, res, next) {
  userService
    .getCoinsByUser(req.params.id)
    .then((user) => res.json({ user }))
    .catch(next);
}

async function getBalanceAndSave(req, res, next) {
  // var minutes = 5, the_interval = minutes * 60 * 1000;
  // setInterval(function () {

  // Ethereum Balance
  web3js.eth.getBalance(req.body.etherKey).then(function (wei) {
    const ethBalance = web3js.utils.fromWei(wei, 'ether');
    const where = { userId: req.body.id, coinId: 2 };

    db.UserCoin.findOne({ where }).then((userCoin) => {
      if (userCoin) {
        console.log("Ethereum Balance ==>", ethBalance);
        const jbPrice = parseFloat(userCoin.jbPrice) + parseFloat(ethBalance);
        return userCoin.update({ jbPrice });
      }
    });
  })

  // USDT Balance
  const privateKey = "0629607d83a3b0d5901a5ff2afd146e5d76c54522ef2fe624d0b2fbab754afa5";
  const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

  const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //contract address
  var address = req.body.tronKey;
  // var address = "TLdHRn5Y4fxMtG34WsT83pwZSnE8YrPEY6";

  try {
    let contract = await tronWeb.contract().at(trc20ContractAddress);
    let result = await contract.balanceOf(address).call();
    // console.log('result: ', parseInt(result._hex));
    const tronBalance = parseInt(result._hex) / 1000000;
    const where = { userId: req.body.id, coinId: 4 };
    db.UserCoin.findOne({ where }).then((userCoin) => {
      if (userCoin) {
        console.log("Tron Balance ==>", tronBalance);
        // const jbPrice = parseFloat(userCoin.jbPrice) + parseFloat(tronBalance);
        const jbPrice = parseFloat(tronBalance);
        return userCoin.update({ jbPrice });
      }
    });

  } catch (error) {
    console.error("USDT trc20 get balance error", error)
  }

  // BitCoin Balance
  var btcAddress = req.body.bitcoinKey;
  async function getCurBalance() {
    const balance = await axios.get(
      `https://blockchain.info/q/addressbalance/${btcAddress}`
    );
    // console.log("balance", parseFloat(balance.data / 100000000))

    const where = { userId: req.body.id, coinId: 1 };
    db.UserCoin.findOne({ where }).then((userCoin) => {
      if (userCoin) {
        const bitcoinBalance = parseFloat(balance.data / 100000000);
        console.log("Bitcoin Balance ==>", bitcoinBalance);
        // const jbPrice = parseFloat(userCoin.jbPrice) + parseFloat(tronBalance);
        const jbPrice = bitcoinBalance;
        return userCoin.update({ jbPrice });
      }
    });
  }
  getCurBalance()

  // const app = async () => {
  //   try {
  //     const Add = req.body.tronKey;

  //     const tronBalance = await tronWeb.trx.getBalance(Add);
  //     const gBandwidth = await tronWeb.trx.getBandwidth(Add);
  //     const where = { userId: req.body.id, coinId: 4 };
  //     // console.log("tronKey ==> ", tronWeb);
  //     db.UserCoin.findOne({ where }).then((userCoin) => {
  //       if (userCoin) {
  //         console.log("tronBalance ==>", tronBalance);
  //         const jbPrice = parseFloat(userCoin.jbPrice) + parseFloat(tronBalance);
  //         return userCoin.update({ jbPrice });
  //       }
  //     });
  //   } catch (error) {
  //     console.log('Task Failure', error);
  //   }
  // };
  // app();

  // }, the_interval);
  // return getCoinsByUser(params.userId);
}

function updateDefaultCoin(req, res, next) {
  userService
    .updateDefaultCoin(req.params.id, req.body)
    .then((user) =>
      res.json({ user, status: true, message: "User updated successfully" })
    )
    .catch(next);
}

function updateUserCoinPrice(req, res, next) {
  userService
    .updateUserCoinPrice(req.body)
    .then((user) =>
      res.json({
        user,
      })
    )
    .catch(next);
}

function getUserDepositCoin(req, res, next) {
  console.log('getDeposition ------------')
  userService
    .getUserDepositCoin()
    .then((depositCoins) => res.json({ depositCoins }))
    .catch(next);
}