const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

// host + /api/auth

const { createUser, renewToken, loginUser } = require('../controllers/auth');
const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');

router.post('/new',
[ 
  check('name', 'El nombre es obligatorio').not().isEmpty() , 
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'El password debe ser de 6 caracteres').isLength(6) ,
  validarCampos
], 
createUser 
);

router.post('/',
[   
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'El password debe ser de 6 caracteres').isLength(6),
  validarCampos
], 
loginUser
);

router.get('/renew', validarJWT,
renewToken 
);

module.exports = router;