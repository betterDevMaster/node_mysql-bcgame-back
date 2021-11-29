const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const socialService = require('./social.service');

// routes
router.post('/register', registerSchema, register);

function registerSchema(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        name: Joi.string().required(),
        profilePicURL: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    socialService.create(req.body)
        .then(user => res.json(user))
        .catch(next);
}

module.exports = router;