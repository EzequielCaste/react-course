const { response } = require('express');
const Usuario = require('../models/Usuario');


const createUser = async(req, res = response ) => {
  
 //const { name, email, password } = req.body;

 const usuario = new Usuario( req.body );

 try {
   await usuario.save();
  
   res.status(201).json({
      ok: true,
      msg: 'registro',    
    })   
 } catch (error) {
   res.status(500).json({
     ok: false,
     msg: "Contactar al administrador"
   })
 }
}


const loginUser = (req, res = response ) => {

  const { email, password } = req.body;

  res.status(202).json({
    email,
    password
  })

  res.json({
      ok: 'login',
      email,
      password
  })
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