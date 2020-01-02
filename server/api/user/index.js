const router = require('express').Router();
const userCtrl = require('./userCtrl');

router.get('/users', userCtrl.getUsers);
router.post('/register', userCtrl.register);

module.exports = router;