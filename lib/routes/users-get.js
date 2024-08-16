const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const { enabled, sortBy } = req.query;

        let query = {};
        if (enabled) { // Filter enabled users
            query.enabled = enabled === 'true';
        }

        let sort = {};
        if (sortBy) {
            sort[sortBy] = 1; // Sort ascending
        }

        const users = await User.find(query).sort(sort);

        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;