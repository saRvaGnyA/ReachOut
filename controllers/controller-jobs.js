/* eslint-disable camelcase */
const pool = require('../postgres/pgConnect');

module.exports.addJob = async (req, res) => {
  try {
    const company_id = req.user;
    const {
      title,
      salary,
      description,
      location,
      sector,
      disability,
      qualification,
    } = req.body;
    const newJob = await pool.query(
      'INSERT INTO "Job"(company_id, title, salary, description, location, sector, disability, qualification) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [
        company_id,
        title,
        salary,
        description,
        location,
        sector,
        disability,
        qualification,
      ],
    );
    res.status(200).json({ success: true, job: newJob.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.applyJob = async (req, res) => {
  try {
    const user_id = req.user;
    const { jobid } = req.params;
    const applicant = await pool.query(
      'INSERT INTO "Application" (job_id, applicant_id) VALUES ($1, $2) RETURNING *',
      [jobid, user_id],
    );
    res.status(200).json({ success: true, details: applicant.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
