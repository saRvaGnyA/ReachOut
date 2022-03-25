const router = require('express').Router();

// MIDDLEWARES
const jwtAuthorization = require('../middleware/jwtAuthorization');

// CONTROLLERS
const {
  getSchemes,
  getSchemesByFilter,
  addScheme,
} = require('../controllers/controller-schemes');

// ROUTES

// to see
router.route('/get-schemes').get(getSchemes);
router.route('/get-schemes/:filterQuery').get(getSchemesByFilter);

// for authorities
router.post('/add-scheme', jwtAuthorization, addScheme);

module.exports = router;
