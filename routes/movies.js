const router = require('express').Router();

router.get('/', getAllMovies);
router.post('/', addMovie);
router.delete('/:id', deleteMovieById);

module.exports = router;
