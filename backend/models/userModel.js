const { Pool } = require('pg');
const pool = require('../config/db').pool;

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = { getUserById };
// En este archivo se exporta 'getUserById' al archivo 'userService.js' en la carpeta 'services'
