const router = require('express').Router();

// MIDDLEWARES
const jwtAuthorization = require('../middleware/jwtAuthorization');

// CONTROLLERS
const {
  registerGovt,
  loginGovt,
  getAuthData,
} = require('../controllers/controller-govt');

// ROUTES
router.route('/register-authority').post(registerGovt);
router.route('/login-authority').post(loginGovt);
router.post('/verify-authority', jwtAuthorization, getAuthData);

module.exports = router;
