const { response } = require('express')

const createUser = (req, res = response ) => {
  
  res.json({
    ok: 'register'
  })
}

const loginUser = (req, res = response ) => {
  res.json({
      ok: 'login'
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