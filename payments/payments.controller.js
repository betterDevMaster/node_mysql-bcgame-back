const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const paymentService = require("./payments.service");

// routes
router.post("/addDeposit", authorize(), depositSchema, addDeposit);
router.get("/", authorize(), getAll);
router.post("/", authorize(), saveAll);
router.put("/", authorize(), update);
router.get("/:id", authorize(), getById);
router.delete("/:id", authorize(), _delete);

module.exports = router;

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
    .then((payments) =>
      res.json({ payments, status: true, message: "Payment registered successfully" })
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
