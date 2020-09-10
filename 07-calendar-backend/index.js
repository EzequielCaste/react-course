const express = require('express');
const dbConnection = require('./db/config');
require('dotenv').config();

const app = express();

dbConnection();

app.use( express.static('public') );

app.use( express.json() );
// Rutas
// auth
app.use('/api/auth', require('./routes/auth') );
// crud

app.get('/', (req, res) => {

  res.send()
});

app.listen( process.env.PORT, () => {
  console.log(`Funciona escuchando puerto: ${process.env.PORT}`)
});