const router = require('express').Router();

// MIDDLEWARES
const jwtAuthorization = require('../middleware/jwtAuthorization');

// CONTROLLERS
const { applyToScheme } = require('../controllers/controller-beneficiary');

// ROUTES
router.post('/apply-scheme/:schemeid', jwtAuthorization, applyToScheme);

module.exports = router;
