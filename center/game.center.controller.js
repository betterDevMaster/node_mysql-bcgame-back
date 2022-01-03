const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const gameCenter = require("./game.center.service");

// routes
router.get("/slot/bet/current", authorize(), getSlotBetCurrent);

module.exports = router;

function getSlotBetCurrent(req, res, next) {
  gameCenter
    .getSlotBetCurrent(req.query)
    .then((current) => res.json(current))
    .catch(next);
}
