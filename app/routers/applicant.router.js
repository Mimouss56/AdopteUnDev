const router = require('express').Router();
const applicantController = require('../controllers/applicant.controller');
const { loggedAs } = require('../middlewares/auth.middleware');

router.get('/', loggedAs, applicantController.getAll);
router.get('/:id', loggedAs, applicantController.getOne);

module.exports = router;
