const router = require('express').Router();

// MIDDLEWARES
const jwtAuthorization = require('../middleware/jwtAuthorization');

// CONTROLLERS
const {
  registerUser,
  loginUser,
  getUserData,
} = require('../controllers/controller-auth');

const {
  registerCompany,
  loginCompany,
  getCompanyData,
} = require('../controllers/controller-company');

// ROUTES

// for user
router.route('/register-user').post(registerUser);
router.route('/login-user').post(loginUser);
router.post('/verify-user', jwtAuthorization, getUserData);

// for company
router.route('/register-company').post(registerCompany);
router.route('/login-company').post(loginCompany);
router.post('/verify-company', jwtAuthorization, getCompanyData);

module.exports = router;
