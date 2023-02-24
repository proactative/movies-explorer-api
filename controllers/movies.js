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

const getAllMovies = (req, res, next) => {
  Movie.find({})
    .populate('owner')
    .then((data) => res.send(data))
    .catch(next);
};

const addMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRu,
    nameEn,
  } = req.body;
  const { owner, movieId } = req.user;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRu,
    nameEn,
  })
    .then((movie) => movie.populate('owner'))
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
  const { movieId } = req.params;
  const userId = req.user._id;

  Movie.findById(movieId)
    .orFail(new NotFoundError(NOT_FOUND_MOVIE_MESSAGE))
    .then((movie) => {
      if (String(movie.owner) !== userId) {
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
  getAllMovies,
  addMovie,
  deleteMovieById,
};
