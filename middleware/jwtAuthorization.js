const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header('token');

    if (!jwtToken) {
      res.status(403).send('Unauthorized access - no JWT');
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = payload.user;

    next();
  } catch (error) {
    next(error);
    res.status(403).send('Unauthorized access');
  }
};
