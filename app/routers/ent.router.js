const router = require('express').Router();
const entController = require('../controllers/ent.controller');
const { loggedAs } = require('../middlewares/auth.middleware');
router.get('/', entController.allEnt);
router.get('/:id', entController.oneEnt);

module.exports = router;