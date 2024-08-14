// Se debe crear una nueva ruta POST /api/users/:id/disable que reciba en la url del id del usuario a eliminar.
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const router = express.Router();

router.post('/api/users/:id/disable', (req, res) => {
    const userId = req.params.id;

    if (!mongoose.isValidObjectId(userId)) {
        return res.status(404).json({ message: "User not found" });
    }

    User.findById(userId)
        .then(user => {
            if (!user) {d
                return res.status(404).json({ message: "User not found" });
            }
            if (!user.enabled) {
                // La ruta debe validar que exista el usuario y que esté habilitado (enabled=true), de no ser así debe retornar status 400.
                return res.status(400).json({ message: "User already disabled" });
            }

            // Si las validaciones son correctas, se debe marcar al usuario indicado como deshabilitado (enabled=false).
            user.enabled = false;
            return user.save(); // Save changes in the database
        })
        .then(updatedUser => {
            // Return susccess response
            return res.status(200).json({ message: "User disabled successfully", user: updatedUser });
        })
        .catch(error => {
            // log and return error
            logger.error(`POST /api/users/:id/disable - saveUser error: ${error.message}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

module.exports = router;