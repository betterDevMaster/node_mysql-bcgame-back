const express = require("express");
const router = express.Router();
const Joi = require("joi");
const web3 = require('web3');
const TronWeb = require('tronweb');
const CryptoAccount = require("send-crypto");

const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const gameCenter = require("./game.center.service");

// routes
router.get("/current", authorize(), getSlotBetCurrent);
router.get("/request", authorize(), getSlotBetRequest);
router.get("/requestSpecial", authorize(), getSlotBetRequestSpecial);
router.post("/saveCurrent", authorize(), saveBetCurrent);

module.exports = router;

web3js = new web3(new web3.providers.HttpProvider("https://rinkeby.infura.io/v3/880ef617ada54597907755ca61355d70"));

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");

async function getSlotBetCurrent(req, res, next) {
  // console.log('req', req.user)
  const where = { userId: req.user.id, coinId: req.user.topCoinId };
  db.UserCoin.findOne({ where }).then((userCoin) => {
    if (userCoin) {
      // console.log('userCoin', userCoin)
      res.json({ userCoin })
    }
  });
}

function getSlotBetRequest(req, res, next) {
  gameCenter
    .getSlotBetRequest(req.query)
    .then((data) => res.json({ data }))
    .catch(next);
}

function getSlotBetRequestSpecial(req, res, next) {
  gameCenter
    .getSlotBetRequestSpecial(req.query)
    .then((data) => res.json({ data }))
    .catch(next);
}

async function saveBetCurrent(req, res, next) {
  const where = { id: req.body.userId };
  var userData;
  await db.User.findOne({ where }).then((user) => {
    if (user) {
      userData = user;
      // res.json({ userCoin })
    }
  });
  // console.log('userData', userData);
  var TransferAmount;
  if (req.body.coinId == 1) {
    async function bitcoinTransaction() {
      /* Load account from private key */
      const privateKey = JSON.parse(userData.dataValues.bitcoinAddr).privateKey || CryptoAccount.newPrivateKey();
      const account = new CryptoAccount(privateKey);
      const AdminWallet = new CryptoAccount("Admin privateKey");

      /* Print address */
      const UserAddr = await account.address("BTC");
      // > "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
      const UserBalance = await account.getBalance("BTC");
      console.log("BTC Balance", UserBalance);
      const TransferAmount = parseFloat(UserBalance - req.body.balance);
      if (TransferAmount > 0) {
        await account
          .send("Admin Wallet Address", TransferAmount, "BTC").then(result => console.log("Bitcoin Transaction: ", result))
      } else {
        await AdminWallet
          .send(UserAddr, Math.abs(TransferAmount), "BTC").then(result => console.log("Bitcoin Transaction: ", result))
      }
    }
    bitcoinTransaction()
  } else if (req.body.coinId == 2) {
    async function etherTransaction() {
      const account = new CryptoAccount(JSON.parse(userData.dataValues.ethereumAddr).privateKey);
      const UserAddr = await account.address("ETH");
      const UserBalance = await account.getBalance("ETH");

      const AdminWallet = new CryptoAccount("Admin privateKey");
      console.log("User Current Ethereum Balance ==> ", UserBalance);
      const TransferAmount = parseFloat(UserBalance - req.body.balance);
      console.log("BitCoin Betting Transfer Amount ==> ", TransferAmount)
      if (TransferAmount > 0) {
        await account.send("Admin Wallet Address", TransferAmount, "ETH").then(result => console.log("ETH Transaction: ", result));
      } else {
        await AdminWallet.send(UserAddr, Math.abs(TransferAmount), "ETH").then(result => console.log("ETH Transaction: ", result));
      }
      // await account.send("0x05a56e2d52c817161883f50c441c3228cfe54d9f", 1.234, {
      //   type: "ERC20",
      //   address: "0x408e41876cccdc0f92210600ef50372656052a38",
      // });
    }

    etherTransaction()
  } else if (req.body.coinId == 4) {
    const privateKey = "3481E79956D4BD95F358AC96D151C976392FC4E3FC132F78A847906DE588C145";
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    tronWeb.setHeader({ "TRON-PRO-API-KEY": '5c392f93-9454-401e-a376-ec67b8f0a1e2' });

    const CONTRACT = JSON.parse(userData.dataValues.tronAddr).publicKey;
    // const CONTRACT = "TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici";
    const ACCOUNT = "TLdHRn5Y4fxMtG34WsT83pwZSnE8YrPEY6";

    async function triggerSmartContract() {
      const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //contract address
      // Get USDT Balance
      try {
        let contract = await tronWeb.contract().at(trc20ContractAddress);
        let result = await contract.balanceOf(CONTRACT).call();
        console.log('USDT Balance: ', parseInt(result));
        TransferAmount = parseFloat(result - req.body.balance * 1000000);
      } catch (error) {
        console.error("Get USDT Balance Error: ", error)
      }
      // USDT Transaction
      console.log('transferAmount', TransferAmount)
      if (TransferAmount > 0) {
        try {
          let contract = await tronWeb.contract().at(trc20ContractAddress);
          await contract.transferFrom(
            CONTRACT, //address _from
            ACCOUNT, //address _to
            TransferAmount //amount
          ).send({
            feeLimit: 10000000
          }).then(output => { console.log('- USDT Transaction Output:', output, '\n'); });
        } catch (error) {
          console.error("USDT Transaction Error: ", error)
        }
      } else {
        const privateKey = "Admin private Key";
        const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
        try {
          let contract = await tronWeb.contract().at(trc20ContractAddress);
          await contract.transferFrom(
            ACCOUNT, //address _from
            CONTRACT, //address _to
            Math.abs(TransferAmount) //amount
          ).send({
            feeLimit: 10000000
          }).then(output => { console.log('- USDT Transaction Output:', output, '\n'); });
        } catch (error) {
          console.error("USDT Transaction Error: ", error)
        }
      }
    }
    triggerSmartContract()
  } else if (req.body.coinId == 25) {
    // TRX Transaction
    async function BettingTRXTransaction() {
      const privateKey = "3481E79956D4BD95F358AC96D151C976392FC4E3FC132F78A847906DE588C145";
      const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
      tronWeb.setHeader({ "TRON-PRO-API-KEY": '5c392f93-9454-401e-a376-ec67b8f0a1e2' });
      const UserWallet = JSON.parse(userData.dataValues.tronAddr).publicKey;
      // const CONTRACT = "TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici";
      const AdminWallet = "TLdHRn5Y4fxMtG34WsT83pwZSnE8YrPEY6";
      const result = await tronWeb.trx.getBalance(CONTRACT)
      const TransferAmount = parseFloat(result - req.body.balance);
      // TRX Transaction
      if (TransferAmount > 0) {
        tronWeb.trx.sendTransaction(ACCOUNT, TransferAmount, CONTRACT).then(result => console.log("TRX Transaction: ", result));
      } else {
        tronWeb.trx.sendTransaction(CONTRACT, Math.abs(TransferAmount), ACCOUNT).then(result => console.log("TRX Transaction: ", result));
      }
    }
    BettingTRXTransaction()
  }
}