const router = require('express').Router();
const { getAllMovies, addMovie, deleteMovieById } = require('../controllers/movies');

router.get('/', getAllMovies);
router.post('/', addMovie);
router.delete('/:id', deleteMovieById);

module.exports = router;
