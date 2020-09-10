const { Router } = require('express');
const router = Router();

// host + /api/auth

const { createUser, renewToken, loginUser } = require('../controllers/auth');

router.post('/new', createUser );

router.post('/', loginUser );

router.get('/renew', renewToken );

module.exports = router;