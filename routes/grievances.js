const router = require('express').Router();

// MIDDLEWARES
const jwtAuthorization = require('../middleware/jwtAuthorization');

// CONTROLLERS
const { postGrievance } = require('../controllers/controller-grievances');

// ROUTES
router.post('/post-grievance', jwtAuthorization, postGrievance);

module.exports = router;
