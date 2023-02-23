const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../utils/config');
const NotFoundError = require('../errors/not-found-error');
const ValidationError = require('../errors/validation-error');
const ConflictError = require('../errors/conflict-error');
const UnauthorisedError = require('../errors/unauthorized-error');
const {
  NOT_FOUND_USER_MESSAGE,
  BAD_REQUEST_USER_MESSAGE,
  NOT_UNIQUE_USER_MESSAGE,
  UNAUTHORIZED_USER_MESSAGE,
} = require('../utils/constants');

const signup = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then((user) => res.send({
      name: user.name,
      email: user.email,
      _id: user._id,
    }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(NOT_UNIQUE_USER_MESSAGE));
        return;
      }
      if (err.name === 'ValidationError') {
        next(new ValidationError(BAD_REQUEST_USER_MESSAGE));
        return;
      }
      next(err);
    });
};

const signin = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorisedError(UNAUTHORIZED_USER_MESSAGE);
      }
      return { matched: bcrypt.compare(password, user.password), user };
    })
    .then(({ matched, user }) => {
      if (!matched) {
        throw new UnauthorisedError(UNAUTHORIZED_USER_MESSAGE);
      }
      const token = jwt.sign(
        { _id: user._id },
        JWT_SECRET,
        { expiresIn: '7d' },
      );
      return res.send({ token });
    })
    .catch(next);
};

const updateUserInfo = (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (user) {
        return res.send(user);
      }
      throw new NotFoundError();
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError(BAD_REQUEST_USER_MESSAGE));
      }
      return next(err);
    });
};

const getUserInfo = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (user) {
        return res.send(user);
      }
      throw new NotFoundError(NOT_FOUND_USER_MESSAGE);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError(BAD_REQUEST_USER_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports = {
  signup, signin, updateUserInfo, getUserInfo,
};
