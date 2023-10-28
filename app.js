const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'fl0user',
  host: 'ep-orange-rice-52185177.us-east-2.aws.neon.fl0.io',
  database: 'Pets_BarberDB',
  password: 'CahKrIp51Mck',
  port: 5432,
  ssl: {
    require: true,
  },
});

app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mascota join dueno on dueno.id = mascota.dueño_id');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al realizar la consulta:', error.message);
    res.status(500).json({ error: 'Error al realizar la consulta' });
  }
});


app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
