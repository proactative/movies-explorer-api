const mongoose = require('mongoose');
const { URL_REGEX } = require('../utils/constants');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          const regex = URL_REGEX;
          return regex.test(v);
        },
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          const regex = URL_REGEX;
          return regex.test(v);
        },
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          const regex = URL_REGEX;
          return regex.test(v);
        },
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
);

module.exports = mongoose.model('movie', movieSchema);
