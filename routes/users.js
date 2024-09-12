const express = require('express');
const router = express.Router();

// Controlador para manejar la lógica de la ruta
const { getUsers, createUser } = require('../controllers/usersController');

// Ruta para obtener todos los usuarios
router.get('/', getUsers);

// Ruta para crear un nuevo usuario
router.post('/', createUser);

module.exports = router;
