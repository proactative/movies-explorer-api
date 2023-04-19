const NotFoundError = require('../errors/not-found-error');
const { NOT_FOUND_PAGE_MESSAGE } = require('../utils/constants');

const notFoundPage = (req, res, next) => {
  next(new NotFoundError(NOT_FOUND_PAGE_MESSAGE));
};

module.exports = { notFoundPage };
