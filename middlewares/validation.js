const { celebrate, Joi } = require('celebrate');
const { URL_REGEX } = require('../utils/constants');

const validateSignup = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().required().min(2).max(30),
    }),
  },
);

const validateSignin = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
);

const validateUpdateUser = celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      email: Joi.string().required().email(),
    }),
  },
);

const validateAddMovie = celebrate(
  {
    body: Joi.object().keys({
      country: Joi.string().required().min(2).max(30),
      duration: Joi.number().required(),
      year: Joi.string().required().min(2).max(4),
      description: Joi.string().required().min(2).max(300),
      image: Joi.string().required().pattern(URL_REGEX),
      trailerLink: Joi.string().required().pattern(URL_REGEX),
      thumbnail: Joi.string().required().pattern(URL_REGEX),
      movieId: Joi.string().required().hex().length(24),
      nameRU: Joi.string().required().min(2).max(30),
      nameEN: Joi.string().required().min(2).max(30),
    }),
  },
);

module.exports = {
  validateSignup,
  validateSignin,
  validateUpdateUser,
  validateAddMovie,
};
