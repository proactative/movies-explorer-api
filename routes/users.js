const router = require('express').Router();
const { getUserInfo, updateUserInfo } = require('../controllers/users');
const { validateUpdateUser } = require('../middlewares/validation');

router.get('/me', getUserInfo);
router.patch('/me', validateUpdateUser, updateUserInfo);

module.exports = router;
