const router = require('express').Router();
// const { loggedAs } = require('../middlewares/auth.middleware');
const loginController = require('../controllers/auth.controller');

router.post('/login', loginController.login);
router.post('/register', loginController.register);

module.exports = router;
