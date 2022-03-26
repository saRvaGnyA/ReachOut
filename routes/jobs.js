const router = require('express').Router();

// MIDDLEWARES
const jwtAuthorization = require('../middleware/jwtAuthorization');

// CONTROLLERS
const {
  addJob,
  applyJob,
  seeJobs,
  seeJobsCompany,
} = require('../controllers/controller-jobs');

// ROUTES

// for companies
router.post('/add-job', jwtAuthorization, addJob);
router.get('/see-jobs-company', jwtAuthorization, seeJobsCompany);

// for applicants
router.get('/see-jobs', jwtAuthorization, seeJobs);
router.post('/apply-job/:jobid', jwtAuthorization, applyJob);

module.exports = router;
