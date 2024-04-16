const router = require('express').Router();

const meController = require('../controllers/me.controller');
const { loggedAs } = require('../middlewares/auth.middleware');

router.get('/', loggedAs, meController.getMe);

module.exports = router;
