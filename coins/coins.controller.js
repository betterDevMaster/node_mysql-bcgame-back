const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const coinService = require("./coins.service");
const upload = require("../_middleware/upload");

// routes
// router.post("/register", authorize(), registerSchema, register);
router.post("/register", authorize(), registerSchema, register);

router.get("/", authorize(), getAll);
router.post("/", authorize(), saveAll);
router.put("/", authorize(), update);
router.get("/:id", authorize(), getById);
router.delete("/:id", authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    oriName: Joi.string().required(),
    type: Joi.string().required(),
    url: Joi.string().required(),
    size: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function register(req, res, next) {
  coinService
    .create(req.body)
    .then(() =>
      res.json({ status: true, message: "Coin registered successfully" })
    )
    .catch(next);
}
function getAll(req, res, next) {
  coinService
    .getAll()
    .then((users) => res.json(users))
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
    .update(req.body)
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
    .then(() =>
      res.json({ status: true, message: "Coin deleted successfully" })
    )
    .catch(next);
}
