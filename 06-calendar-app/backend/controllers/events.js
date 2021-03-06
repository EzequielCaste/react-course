const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async( req, res = response ) => {

  const eventos = await Evento.find()
  .populate('user', 'name')

  
  res.json(
    {
      ok: true,
      eventos
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

const actualizarEvento = async( req, res = response ) => {

  const eventoId = req.params.id;

  try {

    const evento = await Evento.findById( eventoId );
    const uid = req.uid;

    if( !evento ) {
      res.status(404).json({
        ok: false,
        msg: "Evento no existe con ese ID"
      })
    } 

    if ( evento.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de editar este evento"
      });
    }

    const nuevoEvento = {
      ...req.body,
      user: uid
    }
    
    const eventoActualizado =  await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );

    res.json({
      ok: true,
      evento: eventoActualizado
    })


  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el Administrador"
    });    
  }



}

const eliminarEvento = async( req, res = response ) => {

  const eventoId = req.params.id;

  try {

    const evento = await Evento.findById( eventoId );
    const uid = req.uid;

    if( !evento ) {
      res.status(404).json({
        ok: false,
        msg: "Evento no existe con ese ID"
      })
    } 

    if ( evento.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de eliminar este evento"
      });
    }

      
    await Evento.findByIdAndDelete( eventoId );

    res.json({
      ok: true,
      msg: 'Evento borrado.'
    })


  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el Administrador"
    });    
  }

}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
}