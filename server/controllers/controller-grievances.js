/* eslint-disable camelcase */
const pool = require('../postgres/pgConnect');

module.exports.postGrievance = async (req, res) => {
  try {
    const user_id = req.user;
    const { authority } = req.body;
    const grievance = await pool.query(
      'INSERT INTO "Grievance" (user_id, authority) VALUES ($1, $2) RETURNING *',
      [user_id, authority],
    );
    res.status(200).json({ success: true, details: grievance.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
