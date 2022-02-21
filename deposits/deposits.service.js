const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const fs = require("fs");

module.exports = {
  getUserDepositCoin,
};

async function getUserDepositCoin() {
  return await db.Deposit.findAll();
}