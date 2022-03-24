/* eslint-disable camelcase */
const pool = require('../postgres/pgConnect');

module.exports.applyToScheme = async (req, res) => {
  try {
    const user_id = req.user;
    const { schemeid } = req.params;
    const beneficiary = await pool.query(
      'INSERT INTO "Beneficiary" (scheme_id, user_id) VALUES ($1, $2) RETURNING *',
      [schemeid, user_id],
    );
    res.status(200).json({ success: true, application: beneficiary.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
