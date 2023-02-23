const router = require('express').Router();

const routerUsers = require('./users');
const routerMovies = require('./movies');
const { signin, signup } = require('../controllers/users');

router.post('/signin', signin);
router.post('/signup', signup);
router.use('/users', routerUsers);
router.use('/movies', routerMovies);
router.use('/*', nonExistentPath);

module.exports = router;
