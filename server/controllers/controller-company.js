/* eslint-disable camelcase */
const bcrypt = require('bcrypt');

const pool = require('../postgres/pgConnect');
const jwtGenerator = require('../utils/jwtGenerator');

module.exports.registerCompany = async (req, res) => {
  try {
    const {
      company_name,
      company_head,
      company_email,
      company_mobile,
      company_website,
      gstin,
      password,
    } = req.body;

    const company = await pool.query(
      'SELECT * FROM "Company" WHERE company_email = $1',
      [company_email],
    );

    if (company.rows.length !== 0) {
      res
        .status(401)
        .json({ success: false, message: 'Company already exists' });
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPW = await bcrypt.hash(password, salt);

    const newCompany = await pool.query(
      'INSERT INTO "Company" (company_name, company_head, company_email,company_mobile, company_website, gstin, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [
        company_name,
        company_head,
        company_email,
        company_mobile,
        company_website,
        gstin,
        bcryptPW,
      ],
    );

    const token = jwtGenerator(newCompany.rows[0].company_id);

    res.json({ success: true, token });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.loginCompany = async (req, res) => {
  try {
    const { company_email, password } = req.body;

    const company = await pool.query(
      'SELECT * FROM "Company" WHERE company_email = $1',
      [company_email],
    );

    if (company.rows.length === 0) {
      res
        .status(401)
        .json({ success: false, message: "Company doesn't exist" });
    }

    const validPassword = await bcrypt.compare(
      password,
      company.rows[0].password,
    );

    if (!validPassword) {
      res.status(401).json({ success: false, message: 'Incorrect Password' });
    }

    const token = jwtGenerator(company.rows[0].company_id);
    res.json({ success: true, token });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.getCompanyData = async (req, res) => {
  try {
    const company_id = req.user;
    const company = await pool.query(
      'SELECT company_name, company_head, company_email,company_mobile, company_website, gstin FROM "Company" WHERE company_id = $1',
      [company_id],
    );
    res.status(200).json({ success: true, details: company.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
