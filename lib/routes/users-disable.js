const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const router = express.Router();
const logger = require('../logger');

router.post('/users/:id/disable', (req, res) => {
    const userId = req.params.id;

    if (!mongoose.isValidObjectId(userId)) {
        return res.status(404).json({ message: "User not found" });
    }

    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if (!user.enabled) {
                return res.status(400).json({ message: "User already disabled" });
            }

            user.enabled = false;
            return user.save();
        })
        .then(updatedUser => {
            return res.status(200).json({ message: "User disabled successfully", user: updatedUser });
        })
        .catch(error => {
            logger.error(`POST /api/users/:id/disable - saveUser error: ${error.message}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

module.exports = router;
