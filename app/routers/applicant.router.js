const router = require('express').Router();
const applicantController = require('../controllers/applicant.controller');
const { validate } = require('../middlewares/validate.middleware');
const { id } = require('../schemas/global.schema');

router.get('/', applicantController.getAll);
router.get('/:id', validate(id, 'params'), applicantController.getOne);

module.exports = router;
