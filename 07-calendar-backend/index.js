const express = require('express');
require('dotenv').config();

const app = express();

app.use( express.static('public') );



app.get('/', (req, res) => {

  res.send()
});

app.listen( process.env.PORT, () => {
  console.log(`Funciona escuchando puerto: ${process.env.PORT}`)
});