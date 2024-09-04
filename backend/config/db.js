const { Pool } = require('pg');
require('dotenv').config(); // Importar y configurar dotenv

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected');
  } catch (error) {
    console.error('Error connecting to PostgreSQL', error);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
// En este archivo se exporta 'pool' y 'connectDB' al archivo 'server.js' en la carpeta 'backend'
