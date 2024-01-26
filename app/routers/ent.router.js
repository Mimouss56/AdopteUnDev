const router = require('express').Router();
const entController = require('../controllers/ent.controller');
const { loggedAs } = require('../middlewares/auth.middleware');
router.get('/ent', entController.allEnt);
router.get('/ent/:id', entController.oneEnt);

module.exports = router;