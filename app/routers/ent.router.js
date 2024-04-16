const router = require('express').Router();
const entController = require('../controllers/ent.controller');

router.get('/', entController.getAll);
router.get('/:id', entController.get);

module.exports = router;
