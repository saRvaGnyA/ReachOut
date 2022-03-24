require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/schemes', require('./routes/schemes'));
app.use('/auth', require('./routes/auth'));
app.use('/jobs', require('./routes/jobs'));
app.use('/grievance', require('./routes/grievances'));
app.use('/beneficiary', require('./routes/beneficiary'));

const port = process.env.PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at port ${port}`);
});
