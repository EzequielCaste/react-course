const { response } = require('express')
const { validationResult } = require('express-validator');


const createUser = (req, res = response ) => {
  
 const { name, email, password } = req.body;

  const errors = validationResult( req );

  if( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }
  
  res.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password
  })
}


const loginUser = (req, res = response ) => {

  const { email, password } = req.body;

  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

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
  
  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  res.json({
    ok: 'renew'
  })
}

module.exports = { 
  createUser,
  loginUser,
  renewToken
}