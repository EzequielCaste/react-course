const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();
router.use( validarJWT );

// obtener eventos
router.get('/', getEventos );

// // crear un nuevo evento
router.post('/', crearEvento );

// // actualizar evento
router.put('/:id', actualizarEvento );

// // borrar evento
router.delete('/:id', eliminarEvento );

module.exports = router;