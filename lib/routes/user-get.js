// routes/user-get.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Get only one user and his information
router.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // search user and populate userInformation
        const user = await User.findById(userId).populate('userInformation');

        if (!user) {
            return res.status(404).json({
                code: 'not_found',
                message: 'User not found'
            });
        }

        res.json(user.toJSON());
    } catch (error) {
        // Handle error
        console.error(`GET /users/${req.params.id} - getUser error: ${error.message}`);
        res.status(500).json({
            code: 'internal_error',
            message: 'Internal error'
        });
    }
});

module.exports = router;