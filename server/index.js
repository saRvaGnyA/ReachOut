const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
