const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-error');
const ValidationError = require('../errors/validation-error');
const ForbiddenError = require('../errors/forbidden-error');
const {
  NOT_FOUND_MOVIE_MESSAGE,
  BAD_REQUEST_MOVIE_MESSAGE,
  SUCCESS_DELETED_MOVIE_MESSAGE,
  FORBIDDEN_MESSAGE,
} = require('../utils/constants');

const getUserMovies = (req, res, next) => {
  Movie.find({ owner: req.userId })
    .then((data) => res.send(data))
    .catch(next);
};

const addMovie = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.userId })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError(BAD_REQUEST_MOVIE_MESSAGE));
        return;
      }
      next(err);
    });
};

const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.id)
    .orFail(new NotFoundError(NOT_FOUND_MOVIE_MESSAGE))
    .then((movie) => {
      if (String(movie.owner) !== req.userId) {
        throw new ForbiddenError(FORBIDDEN_MESSAGE);
      }
      return movie.delete();
    })
    .then(() => {
      res.send({ message: SUCCESS_DELETED_MOVIE_MESSAGE });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError(BAD_REQUEST_MOVIE_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports = {
  getUserMovies,
  addMovie,
  deleteMovieById,
};
