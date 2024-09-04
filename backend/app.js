const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

app.use(express.json());
app.use(authMiddleware);
app.use('/api', userRoutes);

module.exports = app;
// En este archivo se exporta 'app' al archivo 'server.js' en la carpeta 'backend'
