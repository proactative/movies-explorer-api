const { NOT_UNIQUE_CODE } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_UNIQUE_CODE;
  }
}

module.exports = ConflictError;
