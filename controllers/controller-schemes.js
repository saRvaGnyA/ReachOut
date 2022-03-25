const pool = require('../postgres/pgConnect');

module.exports.getSchemes = async (req, res) => {
  try {
    const schemes = await pool.query(
      'SELECT S.*, A.authority_name FROM "Scheme" AS S INNER JOIN "Authority" AS A ON S.scheme_authority = A.authority_id;',
    );
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
      `SELECT S.*, A.authority_name FROM "Scheme" AS S INNER JOIN "Authority" AS A ON S.scheme_authority = A.authority_id WHERE 
      S.scheme_name ILIKE '%${filterQuery}%' OR 
      S.scheme_type ILIKE '%${filterQuery}%' OR
      A.authority_name ILIKE '%${filterQuery}%'`,
    );
    res.status(200).json({ success: true, message: filteredSchemes.rows });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

/*
SELECT S.*, A.authority_name FROM "Scheme" AS S INNER JOIN "Authority" AS A ON S.scheme_authority = A.authority_id WHERE 
      S.scheme_name ILIKE '%deduction%' OR 
      S.scheme_type ILIKE '%deduction%' OR
      A.authority_name ILIKE '%deduction%';
*/

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
