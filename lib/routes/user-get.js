const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).populate('userInformation');

        if (!user) {
            return res.status(404).json({
                code: 'not_found',
                message: 'User not found'
            });
        }
        res.json(user.toJSON());
    } catch (error) {
        console.error(`GET /users/${req.params.id} - getUser error: ${error.message}`);
        res.status(500).json({
            code: 'internal_error',
            message: 'Internal error'
        });
    }
});

module.exports = router;