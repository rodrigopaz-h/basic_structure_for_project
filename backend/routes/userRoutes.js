const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

router.get('/users', getUsers);

module.exports = router;
// En este archivo se exporta 'router' al archivo 'app.js' en la carpeta 'backend'
