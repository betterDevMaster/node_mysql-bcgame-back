const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const gameService = require("./games.service");

// routes
router.post("/register", authorize(), registerSchema, register);
router.get("/", authorize(), getAll);
router.post("/", authorize(), saveAll);
router.put("/", authorize(), update);
router.get("/:id", authorize(), getById);
router.delete("/:id", authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    gameType: Joi.number().min(1).required(),
    gameUrl: Joi.string().required(),
    description: Joi.string().alphanum().required(),
    icon: Joi.string().alphanum().required(),
    image: Joi.string().alphanum().required(),
    supportedPlayType: Joi.number().min(1).required(),
    // favorite: Joi.number().required(),
    // fairness: Joi.number().required(),
    playType: Joi.number().min(1).required(),
  });
  validateRequest(req, next, schema);
}

function register(req, res, next) {
  gameService
    .create(req.body)
    .then(() =>
      res.json({ status: true, message: "Game registered successfully" })
    )
    .catch(next);
}
function getAll(req, res, next) {
  gameService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
}
function saveAll(req, res, next) {
  gameService
    .saveAll(req.body)
    .then(() =>
      res.json({ status: true, message: "Game registered successfully" })
    )
    .catch(next);
}
function update(req, res, next) {
  gameService
    .update(req.body)
    .then(() =>
      res.json({ status: true, message: "Game updated successfully" })
    )
    .catch(next);
}

function getById(req, res, next) {
  gameService
    .getById(req.params.id)
    .then((game) => res.json(game))
    .catch(next);
}

function _delete(req, res, next) {
  gameService
    .delete(req.params.id)
    .then(() =>
      res.json({ status: true, message: "Game deleted successfully" })
    )
    .catch(next);
}
