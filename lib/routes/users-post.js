'use strict';
const router = require('express').Router();
const logger = require('../logger');
const { User, UserInformation } = require('../models');
const Joi = require('joi');

const schema = Joi.object({
    // UserInformation
    name: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    dni: Joi.string().required(),
    age: Joi.number().integer().min(0).max(200),
    // User
    color: Joi.string().valid('red', 'green', 'blue'),
    email: Joi.string().email().required(),
    enabled: Joi.boolean().default(true),
});

function validateFields(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

function createUserInformation(req, res, next) {
    const userInformationData = {
        name: req.body.name,
        lastName: req.body.lastName,
        dni: req.body.dni,
        age: req.body.age
    };

    UserInformation.create(userInformationData)
        .then(userInformation => {
            req.userInformationId = userInformation._id;
            next();
        })
        .catch(error => {
            logger.error(`POST /users - createUserInformation error: ${error.message}`);
            return res.status(500).json({
                code: 'internal_error',
                message: 'Internal error'
            });
        });
}

function saveUser(req, res) {
    User.create({
        color: req.body.color,
        email: req.body.email,
        enabled: req.body.enabled,
        userInformation: req.userInformationId
    })
        .then(user => {
            return res.status(201).json(user.toJSON());
        })
        .catch(error => {
            logger.error(`POST /users - saveUser error: ${error.message}`);
            return res.status(500).json({code: 'internal_error',
                message: 'Internal error'
            });
        });
}

router.post(
    '/users',
    validateFields,
    createUserInformation,
    saveUser
);

module.exports = router;
