const router = require('express').Router();

const routerUsers = require('./users');
const routerMovies = require('./movies');
const { signin, signup } = require('../controllers/users');
const { nonExistentPath } = require('../controllers/nonExistentPath');
const { validateSignup, validateSignin } = require('../middlewares/validation');
const { auth } = require('../middlewares/auth');

router.post('/signin', validateSignin, signin);
router.post('/signup', validateSignup, signup);
router.use('/users', auth, routerUsers);
router.use('/movies', auth, routerMovies);
router.use('/*', nonExistentPath);

module.exports = router;
