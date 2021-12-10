const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const depositService = require("./deposits.service");

// routes
router.get("/depositCoin", authorize(), getUserDepositCoin);

module.exports = router;

function getUserDepositCoin(req, res, next) {
  depositService
    .getUserDepositCoin()
    .then((coins) => res.json({ coins }))
    .catch(next);
}