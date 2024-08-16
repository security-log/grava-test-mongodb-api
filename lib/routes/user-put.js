const express = require('express');
const Joi = require('joi');
const User = require('../models/user');
const router = express.Router();

const userSchema = Joi.object({
        name: Joi.string().min(3),
        lastName: Joi.string().min(3),
        dni: Joi.string(),
        age: Joi.number().integer().min(0).max(200),
        color: Joi.string().valid('red', 'green', 'blue'),
        email: Joi.string().email(),
});

router.put('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        const { error } = userSchema.validate(updateData);
        if (error) {
            return res.status(400).json({
                code: 'validation_error',
                message: error.details[0].message
            });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                code: 'not_found',
                message: 'User not found'
            });
        }

        res.json(updatedUser.toJSON());
    } catch (error) {
        console.error(`PUT /users/${req.params.id} - updateUser error: ${error.message}`);
        res.status(500).json({
            code: 'internal_server_error',
            message: 'Internal Server Error'
        });
    }
});

module.exports = router;