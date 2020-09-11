const express = require('express');
const cors = require('cors');
const dbConnection = require('./db/config');
require('dotenv').config();

const app = express();

dbConnection();

// app.use(cors);
app.use( express.static('public') );
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );

app.get('/', (req, res) => {
  res.send();
});

app.listen( process.env.PORT, () => {
  console.log(`Funciona escuchando puerto: ${process.env.PORT}`);
});