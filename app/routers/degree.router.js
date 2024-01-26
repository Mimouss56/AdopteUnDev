const router = require('express').Router();
const degreeController = require('../controllers/degree.controller');

router.get('/', degreeController.getAllDegree);
router.get('/:id', degreeController.getDegree);

module.exports = router;