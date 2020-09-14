const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = ( req, res = response ) => {

  res.json(
    {
      ok: true,
      msg: "obtener eventos"
    }
  );  

}

const crearEvento = async( req, res = response ) => {

  const evento = new Evento( req.body );

  try {

    evento.user = req.uid;

    const eventoDB = await evento.save();

   res.json({
     ok: true,
     eventoDB
   })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Contacte al administrador"
    });
  }
 

}

const actualizarEvento = ( req, res = response ) => {

  res.json(
    {
      ok: true,
      msg: "actualizar evento"
    }
  );  

}

const eliminarEvento = ( req, res = response ) => {

  res.json(
    {
      ok: true,
      msg: "eliminar evento"
    }
  );  

}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
}