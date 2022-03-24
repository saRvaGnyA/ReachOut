const router = require('express').Router();

// MIDDLEWARES

// CONTROLLERS
const {
  getSchemes,
  getSchemesByFilter,
} = require('../controllers/controller-schemes');

// ROUTES
router.route('/get-schemes').get(getSchemes);
router.route('/get-schemes/:filterQuery').get(getSchemesByFilter);

module.exports = router;
