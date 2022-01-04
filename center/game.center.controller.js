const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const gameCenter = require("./game.center.service");

// routes
router.get("/current", authorize(), getSlotBetCurrent);
router.get("/request", authorize(), getSlotBetRequest);
router.get("/requestSpecial", authorize(), getSlotBetRequestSpecial);

module.exports = router;

function getSlotBetCurrent(req, res, next) {
  gameCenter
    .getSlotBetCurrent(req.query)
    .then((current) => res.json({ current }))
    .catch(next);
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
