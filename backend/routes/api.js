
const express = require('express');
const router = express.Router();
const { getDatos } = require('../controllers/apiController');

router.get('/datos', getDatos);
app.get('/api/datos', (req, res) => {
    const sql = 'SELECT * FROM datos';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
module.exports = router;
