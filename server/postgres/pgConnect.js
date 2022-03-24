const { Pool } = require('pg');
require('dotenv').config();

// dev config

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DB,
});

// production config

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

module.exports = pool;
