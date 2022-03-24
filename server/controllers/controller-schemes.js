const pool = require('../postgres/pgConnect');

module.exports.getSchemes = async (req, res) => {
  try {
    const schemes = await pool.query('SELECT * FROM "Scheme"');
    res.status(200).json({ success: true, message: schemes.rows });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.getSchemesByFilter = async (req, res) => {
  try {
    const { filterQuery } = req.params;
    const filteredSchemes = await pool.query(
      `SELECT * FROM "Scheme" WHERE 
      scheme_name ILIKE '%${filterQuery}%' OR 
      scheme_type ILIKE '%${filterQuery}%' OR
      scheme_authority ILIKE '%${filterQuery}%'`,
    );
    res.status(200).json({ success: true, message: filteredSchemes.rows });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
