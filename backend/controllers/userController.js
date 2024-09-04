const userService = require('../services/userService');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers };
// En este archivo se exporta 'getUsers' al archivo 'userRoutes.js' en la carpeta 'routes'
