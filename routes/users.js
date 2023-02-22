const router = require('express').Router();

router.get('/me', getUserInfo);
router.patch('/me', updateUserInfo);

module.exports = router;
