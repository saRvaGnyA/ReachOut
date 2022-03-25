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

module.exports.addScheme = async (req, res) => {
  try {
    const authority_id = req.user;
    const {
      scheme_name,
      scheme_description,
      scheme_type,
      scheme_date,
      scheme_link,
    } = req.body;
    const scheme = await pool.query(
      'INSERT INTO "Scheme" (scheme_name, scheme_description, scheme_type, scheme_authority, scheme_date, scheme_link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        scheme_name,
        scheme_description,
        scheme_type,
        authority_id,
        scheme_date,
        scheme_link,
      ],
    );
    res.status(200).json({ success: true, details: scheme.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
