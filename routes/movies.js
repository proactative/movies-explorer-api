const router = require('express').Router();
const { getUserMovies, addMovie, deleteMovieById } = require('../controllers/movies');
const { validateAddMovie, validateId } = require('../middlewares/validation');

router.get('/', getUserMovies);
router.post('/', validateAddMovie, addMovie);
router.delete('/:id', validateId, deleteMovieById);

module.exports = router;
