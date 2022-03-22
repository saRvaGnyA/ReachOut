const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at port ${port}`);
});
