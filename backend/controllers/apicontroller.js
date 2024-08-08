// backend/controllers/apiController.js
const mysql = require('mysql2');

// Configuración de la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Función para manejar la ruta '/datos'
const getDatos = (req, res) => {
  const sql = 'SELECT * FROM datos';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
      return;
    }
    res.json(results);
  });
};

module.exports = { getDatos };
