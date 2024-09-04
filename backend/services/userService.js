const { getUserById } = require('../models/userModel');

const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

module.exports = { getAllUsers };
// En este archivo se exporta 'getAllUsers' al archivo 'userController.js' en la carpeta 'controllers'
