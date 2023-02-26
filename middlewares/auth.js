const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');
const { REQUIRE_AUTHORIZATION_MESSAGE } = require('../utils/constants');
const { JWT_SECRET } = require('../utils/config');

const auth = (req, res, next) => {
  let payload;
  try {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return next(new UnauthorizedError(REQUIRE_AUTHORIZATION_MESSAGE));
    }
    const token = authorization.replace('Bearer ', '');
    payload = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return next(new UnauthorizedError(REQUIRE_AUTHORIZATION_MESSAGE));
  }
  req.userId = payload._id;
  return next();
};

module.exports = { auth };
