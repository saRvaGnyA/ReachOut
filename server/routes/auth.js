const router = require('express').Router();

// MIDDLEWARES
const jwtAuthorization = require('../middleware/jwtAuthorization');

// CONTROLLERS
const {
  registerUser,
  loginUser,
  getUserData,
} = require('../controllers/controller-auth');

// ROUTES
router.route('/register-user').post(registerUser);
router.route('/login-user').post(loginUser);
router.post('/verify-user', jwtAuthorization, getUserData);

module.exports = router;
