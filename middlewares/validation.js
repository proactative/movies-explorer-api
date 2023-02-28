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
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().pattern(URL_REGEX),
      trailerLink: Joi.string().required().pattern(URL_REGEX),
      thumbnail: Joi.string().required().pattern(URL_REGEX),
      movieId: Joi.number().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
  },
);

const validateId = celebrate(
  {
    params: Joi.object().keys({
      id: Joi.string().required().hex().length(24),
    }),
  },
);

module.exports = {
  validateSignup,
  validateSignin,
  validateUpdateUser,
  validateAddMovie,
  validateId,
};
