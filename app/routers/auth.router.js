const router = require('express').Router();
const loginController = require('../controllers/auth.controller');
const { validate } = require('../middlewares/validate.middleware');
const { userLogin, userRegister } = require('../schemas/auth.schema');

router.post('/login', validate(userLogin), loginController.login);
router.post('/register', validate(userRegister), loginController.register);

module.exports = router;
