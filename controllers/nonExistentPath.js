const NotFoundError = require('../errors/not-found-error');
const { NON_EXISTENT_PAGE } = require('../utils/constants');

const nonExistentPath = (req, res, next) => {
  next(new NotFoundError(NON_EXISTENT_PAGE));
};

module.exports = { nonExistentPath };
