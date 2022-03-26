/* eslint-disable camelcase */
const bcrypt = require('bcrypt');

const pool = require('../postgres/pgConnect');
const jwtGenerator = require('../utils/jwtGenerator');

module.exports.registerUser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      aadhar,
      mobile,
      age,
      password,
      disability_certificate,
      face_id,
      place,
      disability_type,
      disability,
      severity,
      qualifications,
    } = req.body;

    const user = await pool.query('SELECT * FROM "User" WHERE email = $1', [
      email,
    ]);

    if (user.rows.length !== 0) {
      res.status(401).json({ success: false, message: 'User already exists' });
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPW = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      'INSERT INTO "User" (first_name, last_name, aadhar, email, mobile, age, password, disability_certificate, face_id, place, disability_type, disability, severity, qualifications) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
      [
        first_name,
        last_name,
        aadhar.split(' ').join(''),
        email,
        mobile.split(' ').join(''),
        age,
        bcryptPW,
        disability_certificate,
        face_id,
        place,
        disability_type,
        disability,
        severity,
        qualifications,
      ],
    );

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ success: true, token });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM "User" WHERE email = $1', [
      email,
    ]);

    if (user.rows.length === 0) {
      res.status(401).json({ success: false, message: "User doesn't exist" });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      res.status(401).json({ success: false, message: 'Incorrect Password' });
    }

    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ success: true, token });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports.getUserData = async (req, res) => {
  try {
    const user_id = req.user;
    const user = await pool.query(
      'SELECT (first_name || \' \' || last_name) AS name, aadhar, email, mobile,age, place, disability_type, disability, severity, qualifications FROM "User" WHERE user_id = $1',
      [user_id],
    );
    res.status(200).json({ success: true, details: user.rows[0] });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
