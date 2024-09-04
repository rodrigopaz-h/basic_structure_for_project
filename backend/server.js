const app = require('./app');
const { connectDB } = require('./config/db');

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// En este archivo se importa 'app' del archivo 'app.js' en la carpeta 'backend'
// En este archivo se importa 'connectDB' del archivo 'db.js' en la carpeta 'config'
