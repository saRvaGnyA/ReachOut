const router = require('express').Router();

// MIDDLEWARES

// CONTROLLERS
const { registerUser, loginUser } = require('../controllers/controller-auth');

// ROUTES
router.route('/register-user').post(registerUser);
router.route('/login-user').post(loginUser);

module.exports = router;
