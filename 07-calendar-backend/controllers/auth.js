const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const createUser = async(req, res = response ) => {
  
 const { email, password } = req.body;

 try {

  let usuario = await Usuario.findOne( { email } );

  if ( usuario ) {
    return res.status(400).json({
      ok: false,
      msg: 'El usuario ya existe'
    })
  }

   usuario = new Usuario( req.body );

   const salt = bcrypt.genSaltSync();
   usuario.password = bcrypt.hashSync( password, salt);

   await usuario.save();
  //jwt
  const token = await generarJWT( usuario.id, usuario.name );


  
   res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    })   
 } catch (error) {
   res.status(500).json({
     ok: false,
     msg: "Contactar al administrador"
   })
 }
}


const loginUser = async(req, res = response ) => {

  const { email, password } = req.body;

  try {

    const usuario = await Usuario.findOne( { email } );

    if ( !usuario ) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario o contraseña incorrectas'
      })
    }

    const validPassword = bcrypt.compareSync( password, usuario.password );

    if ( !validPassword ) {
      res.status(400).json({
        ok: false,
        mgg: 'Contactar al administrador'
      })
    }

    const token = await generarJWT( usuario.id, usuario.name );

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    })

    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Contactar al administrador"
    })
  }


 
}

const renewToken = (req, res = response ) => {

  res.json({
    ok: 'renew'
  })
}

module.exports = { 
  createUser,
  loginUser,
  renewToken
}