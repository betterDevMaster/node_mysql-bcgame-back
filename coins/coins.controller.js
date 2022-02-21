const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const coinService = require("./coins.service");
const upload = require("../_middleware/upload");

// routes
// router.post("/register", authorize(), registerSchema, register);
router.post("/register", authorize(), register);

router.get("/", authorize(), getAll);
router.get("/switchCoins", authorize(), getAllSwitchCoins);
router.post("/", authorize(), saveAll);
router.put("/:id", authorize(), update);
router.get("/:id", authorize(), getById);
router.delete("/:id", authorize(), _delete);

module.exports = router;

function register(req, res, next) {
  coinService
    .create(req.body)
    .then((coins) =>
      res.json({ coins, status: true, message: "Coin registered and Wallet created successfully" })
    )
    .catch(next);
}
function getAll(req, res, next) {
  coinService
    .getAll()
    .then((coins) => res.json({ coins }))
    .catch(next);
}
function getAllSwitchCoins(req, res, next) {
  coinService
    .getAllSwitchCoins()
    .then((switchList) => res.json({ switchList }))
    .catch(next);
}
function saveAll(req, res, next) {
  coinService
    .saveAll(req.body)
    .then(() =>
      res.json({ status: true, message: "Coin registered successfully" })
    )
    .catch(next);
}
function update(req, res, next) {
  coinService
    .update(req.params.id, req.body)
    .then(() =>
      res.json({ status: true, message: "Coin updated successfully" })
    )
    .catch(next);
}

function getById(req, res, next) {
  coinService
    .getById(req.params.id)
    .then((coin) => res.json(coin))
    .catch(next);
}

function _delete(req, res, next) {
  coinService
    .delete(req.params.id)
    .then((coins) =>
      res.json({ coins, status: true, message: "Coin deleted successfully" })
    )
    .catch(next);
}
