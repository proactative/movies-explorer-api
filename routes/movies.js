const router = require('express').Router();
const { getAllMovies, addMovie, deleteMovieById } = require('../controllers/movies');
const { validateAddMovie } = require('../middlewares/validation');

router.get('/', getAllMovies);
router.post('/', validateAddMovie, addMovie);
router.delete('/:id', deleteMovieById);

module.exports = router;
