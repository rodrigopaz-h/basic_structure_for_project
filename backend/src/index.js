// Importamos las dependencias necesarias
const express = require('express');
const app = express();
const userRoutes = require('../routes/userRoutes');
const authMiddleware = require('../middlewares/authMiddleware');
const { connectDB } = require('../config/db');

connectDB();

// Middlewares
app.use(express.json());
app.use(authMiddleware);

// Rutas
app.use('/api', userRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// En este archivo se importa 'connectDB' del archivo 'db.js' en la carpeta 'config'