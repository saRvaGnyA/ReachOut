/* eslint-disable camelcase */
const bcrypt = require('bcrypt');

const pool = require('../postgres/pgConnect');
const jwtGenerator = require('../utils/jwtGenerator');

module.exports.registerGovt = async (req, res) => {
  try {
    const { authority_name, password } = req.body;

    const govt = await pool.query(
      'SELECT * FROM "Authority" WHERE authority_name = $1',
      [authority_name],
    );

    if (govt.rows.length !== 0) {
      res
        .status(401)
        .json({ success: false, message: 'Authority already exists' });
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPW = await bcrypt.hash(password, salt);

    const newAuthority = await pool.query(
      'INSERT INTO "Authority" (authority_name, password) VALUES ($1, $2) RETURNING *',
      [authority_name, bcryptPW],
    );

    const token = jwtGenerator(newAuthority.rows[0].authority_id);

    res.json({ success: true, token });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.loginGovt = async (req, res) => {
  try {
    const { authority_name, password } = req.body;

    const auth = await pool.query(
      'SELECT * FROM "Authority" WHERE authority_name = $1',
      [authority_name],
    );

    if (auth.rows.length === 0) {
      res
        .status(401)
        .json({ success: false, message: "Authority doesn't exist" });
    }

    const validPassword = await bcrypt.compare(password, auth.rows[0].password);

    if (!validPassword) {
      res.status(401).json({ success: false, message: 'Incorrect Password' });
    }

    const token = jwtGenerator(auth.rows[0].authority_id);
    res.json({ success: true, token });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.getAuthData = async (req, res) => {
  try {
    const authority_id = req.user;
    const authority = await pool.query(
      'SELECT authority_name FROM "Authority" WHERE authority_id = $1',
      [authority_id],
    );
    res.status(200).json({ success: true, details: authority.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
