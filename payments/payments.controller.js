const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const paymentService = require("./payments.service");

const web3 = require('web3');
const TronWeb = require('tronweb');
const CryptoAccount = require("send-crypto");

const Tx = require('ethereumjs-tx');
const axios = require("axios");
const bitcore = require("bitcore-lib");
// routes
router.post("/addDeposit", authorize(), depositSchema, addDeposit);
router.post("/withdraw", authorize(), withdraw);
router.post("/getBalance", authorize(), getBalance);
router.post("/", authorize(), saveAll);
router.put("/", authorize(), update);
router.get("/:id", authorize(), getById);
router.delete("/:id", authorize(), _delete);

module.exports = router;

web3js = new web3(new web3.providers.HttpProvider("https://rinkeby.infura.io/v3/880ef617ada54597907755ca61355d70"));

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");

function getBalance(req, res) {
  var minutes = 5, the_interval = minutes * 60 * 1000;
  setInterval(function () {
    web3js.eth.getBalance(myWallet).then(function (wei) {
      const ethBalance = web3js.utils.fromWei(wei, 'ether');
      console.log("balance--->", ethBalance);
    })

    const privateKey = req.body.privateKey;
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
    console.log('req address', req.body)

    const app = async () => {
      try {
        const Add = req.body.myAddress;
        const gBalance = await tronWeb.trx.getBalance(Add);
        const gBandwidth = await tronWeb.trx.getBandwidth(Add);
        console.log("getBalance : ", gBalance);
        console.log("My Wallet", Add);
      } catch (error) {
        console.log('Task Failure', error);
      }
    };
    app();

  }, the_interval);

}

function withdraw(req, res) {
  console.log("withdraw", req.body)

  var toAddress = req.body.toAddress;
  var myWallet = req.body.myAddress;
  var privateKey = req.body.privateKey;

  if (req.body.coinName == "Ethereum") {

    async function etherTransaction() {
      const account = new CryptoAccount(req.body.privateKey);
      console.log("account", await account.getBalance("ETH"));

      await account.send(toAddress, 0.01, "ETH").then(result => console.log("ETH Transaction: ", result));

      // await account.send("0x05a56e2d52c817161883f50c441c3228cfe54d9f", 1.234, {
      //   type: "ERC20",
      //   address: "0x408e41876cccdc0f92210600ef50372656052a38",
      // });
    }

    etherTransaction().then(() => {
      console.log("ok");
    })
      .catch((err) => {
        console.log("error:", err);
      });

    // var minutes = 1, the_interval = minutes * 60 * 1000;
    // // setInterval(function () {
    // web3js.eth.getBalance(myWallet).then(function (wei) {
    //   const ethBalance = web3js.utils.fromWei(wei, 'ether');
    //   console.log("balance--->", ethBalance);
    // })
    // }, the_interval);

    // web3js.eth.getBalance(myWallet).then(function (wei) {
    //   const ethBalance = web3js.utils.fromWei(wei, 'ether');
    //   // console.log("balance--->", ethBalance);

    //   if (ethBalance > 0) {
    //     // Create transaction
    //     const deploy = async () => {
    //       console.log(`Sending a transaction for ${myWallet} to ${toAddress}`)
    //       console.log("wei", web3js.utils.toWei('10', 'ether'))
    //       const createTransaction = await web3js.eth.accounts.signTransaction({
    //         from: myWallet,
    //         to: toAddress,
    //         value: web3js.utils.toWei('10', 'ether'),
    //         gas: 21000,
    //         // 0.0021 ETH
    //       },
    //         privateKey
    //       );
    //       // Deploy our transaction
    //       const receipt = await web3js.eth.sendSignedTransaction(createTransaction.rawTransaction);
    //       console.log(`Transaction successfull with hash: ${receipt.transactionHash}`)
    //     }
    //     deploy()
    //   } else {
    //     console.log("No Balance in your account")
    //   }
    // })
  } else if (req.body.coinName == "Tether") {

    const privateKey = "0629607d83a3b0d5901a5ff2afd146e5d76c54522ef2fe624d0b2fbab754afa5";
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    tronWeb.setHeader({ "TRON-PRO-API-KEY": '5c392f93-9454-401e-a376-ec67b8f0a1e2' });

    const CONTRACT = "TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici";
    const TO_ACCOUNT = "TLdHRn5Y4fxMtG34WsT83pwZSnE8YrPEY6";

    tronWeb.trx.getBalance('TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici').then(result => console.log("TRX Balance: ", result))
    // tronWeb.trx.getContract("TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici").then(result => console.log("Get Contract Address: ", result))

    async function triggerSmartContract() {
      const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //contract address
      var address = "TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici";
      // Get USDT Balance
      try {
        let contract = await tronWeb.contract().at(trc20ContractAddress);
        let result = await contract.balanceOf(address).call();
        console.log('USDT Balance: ', parseInt(result));
      } catch (error) {
        console.error("Get USDT Balance Error: ", error)
      }

      // USDT Transaction
      const { abi } = await tronWeb.trx.getContract(trc20ContractAddress);
      // console.log(JSON.stringify(abi));
      const contract = tronWeb.contract(abi.entrys, trc20ContractAddress);
      const resp = await contract.methods.transfer(TO_ACCOUNT, 100000).send();
      console.log("transfer:", resp);

      // TRX Transaction
      // var privateKey = "0629607d83a3b0d5901a5ff2afd146e5d76c54522ef2fe624d0b2fbab754afa5"
      // var fromAddress = "TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici"; //address _from
      // var toAddress = "TLdHRn5Y4fxMtG34WsT83pwZSnE8YrPEY6"; //address _to
      // var amount = 100000; //amount
      // //Creates an unsigned TRX transfer transaction
      // tradeobj = await tronWeb.transactionBuilder.sendTrx(
      //   toAddress,
      //   amount,
      //   fromAddress
      // );
      // const signedtxn = await tronWeb.trx.sign(
      //   tradeobj,
      //   privateKey
      // );
      // const receipt = await tronWeb.trx.sendRawTransaction(
      //   signedtxn
      // );
      // console.log('- Output:', receipt, '\n');
    }

    triggerSmartContract().then(() => {
      console.log("ok");
    })
      .catch((err) => {
        console.log("error:", err);
      });

  } else if (req.body.coinName == "Bitcoin") {
    // const recieverAddress = "bc1qtky0jng0m465pvqpnmxn8g3d44tggevrgvmftv";

    // var btcAddress = "13L9fgQjzzU3cyD8YzVjUtHjDbHUUce95E";
    // async function getCurBalance() {
    //   const balance = await axios.get(
    //     `https://blockchain.info/q/addressbalance/${btcAddress}`
    //   );
    //   console.log("balance", parseFloat(balance.data / 100000000))
    // }

    // bitcoin:bc1q0veh47cz9ppc8npz37fg5df5glpzkyajjhjz27
    // trx:TUjDdXuKYnQVpikEjX1iUDzWJzTED5rici
    // eth: 0xc66909A27Db6905974a11cd117e807805Af88297

    // getCurBalance()

    async function bitcoinTransaction() {
      /* Load account from private key */
      const privateKey = req.body.privateKey || CryptoAccount.newPrivateKey();
      const account = new CryptoAccount(privateKey);
      /* Print address */
      console.log(await account.address("BTC"));
      // > "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
      console.log("balance", await account.getBalance("BTC"));

      await account
        .send("bc1qtky0jng0m465pvqpnmxn8g3d44tggevrgvmftv", 0.00001, "BTC").then(result => console.log("Bitcoin Transaction: ", result))
      // .on("transactionHash", console.log)
      // // > "3387418aaddb4927209c5032f515aa442a6587d6e54677f08a03b8fa7789e688"
      // .on("confirmation", console.log);
    }

    bitcoinTransaction().then(() => {
      console.log("ok");
    })
      .catch((err) => {
        console.log("error:", err);
      });
  }
}

function depositSchema(req, res, next) {
  const schema = Joi.object({
    userId: Joi.number().required(),
    depositBonusId: Joi.number().required(),
    coinId: Joi.number().required(),
    coinName: Joi.string().required(),
    requestId: Joi.string().required(),
    price: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function addDeposit(req, res, next) {
  paymentService
    .addDeposit(req.body)
    .then(() =>
      res.json({
        status: true,
        message: "Payment registered successfully",
      })
    )
    .catch(next);
}
function getAll(req, res, next) {
  paymentService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
}
function saveAll(req, res, next) {
  paymentService
    .saveAll(req.body)
    .then(() =>
      res.json({ status: true, message: "Payment registered successfully" })
    )
    .catch(next);
}
function update(req, res, next) {
  paymentService
    .update(req.body)
    .then(() =>
      res.json({ status: true, message: "Payment updated successfully" })
    )
    .catch(next);
}

function getById(req, res, next) {
  paymentService
    .getById(req.params.id)
    .then((payment) => res.json(payment))
    .catch(next);
}

function _delete(req, res, next) {
  paymentService
    .delete(req.params.id)
    .then(() =>
      res.json({ status: true, message: "Payment deleted successfully" })
    )
    .catch(next);
}



module.exports = router;