const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const userService = require("./user.service");

// routes
router.post("/authenticate", authenticateSchema, authenticate);
router.post("/profile", emailSchema, profie);
router.post("/register", registerSchema, register);
router.post("/registerByAdmin", authorize(), adminSchema, register);
router.post("/forgotPassword", emailSchema, forgotPassword);
router.get("/", authorize(), getAll);
router.get("/current", authorize(), getCurrent);
router.get("/:id", authorize(), getById);
router.put("/:id", authorize(), updateSchema, update);
router.delete("/:id", authorize(), _delete);
router.post("/registerUserCoin", authorize(), registerCoin);
router.get("/coins/:id", authorize(), getCoins);

module.exports = router;

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

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then((user) => res.json(user))
    .catch(next);
}

function emailSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  });
  validateRequest(req, next, schema);
}

function forgotPassword(req, res, next) {
  userService
    .forgotPassword({ email: req.body.email })
    .then((user) =>
      res.json({
        status: "success",
        user,
        message: "Default password is '12345678'",
      })
    )
    .catch(next);
}

function profie(req, res, next) {
  userService
    .profile(req.body)
    .then((user) => res.json(user))
    .catch(next);
}

function registerSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
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

function updateSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    profilePicURL: Joi.string(),
  });
  validateRequest(req, next, schema);
}

function adminSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
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
  });
  validateRequest(req, next, schema);
}

function register(req, res, next) {
  userService
    .create(req.body)
    .then(() =>
      res.json({ status: true, message: "User registered successfully" })
    )
    .catch(next);
}

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) => res.json(users))
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
    .then(() =>
      res.json({ status: true, message: "User updated successfully" })
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
    .then((detail) =>
      res.json({
        detail,
        status: true,
        message: "UserCoin registered successfully",
      })
    )
    .catch(next);
}

function getCoins(req, res, next) {
  userService
    .getCoins(req.params.id)
    .then((user) => res.json(user))
    .catch(next);
}
