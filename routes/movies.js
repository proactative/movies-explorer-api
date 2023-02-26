const router = require('express').Router();
const { getUserMovies, addMovie, deleteMovieById } = require('../controllers/movies');
const { validateAddMovie } = require('../middlewares/validation');

router.get('/', getUserMovies);
router.post('/', validateAddMovie, addMovie);
router.delete('/:id', deleteMovieById);

module.exports = router;
