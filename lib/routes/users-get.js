// Se debe crear una nueva ruta GET /api/users que retorne un listado de usuarios guardados en la base de datos.
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// FIX: sort by userinformationdata doesn't work
router.get('/users', async (req, res) => {
    try {
        // get query params
        const { enabled, sortBy } = req.query;

        let query = {};

        // Se debe permitir filtrar por medio de un parámetro query los usuarios habilitados o deshabilitados (campo “enabled”).
        if (enabled) { // Filter enabled users
            query.enabled = enabled === 'true';
        }

        let sort = {};

        // Se debe permitir indicar, por medio de un parámetro query, un campo para ordenar.
        if (sortBy) {
            sort[sortBy] = 1; // Sort ascending
        }

        // Look for users in the database with filters and sort
        const users = await User.find(query).sort(sort);

        res.json(users); // Return the users as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;