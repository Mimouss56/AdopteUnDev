const router = require('express').Router();
const applicantController = require('../controllers/applicant.controller');

router.get('/', applicantController.getAll);
router.get('/:id', applicantController.getOne);

module.exports = router;
