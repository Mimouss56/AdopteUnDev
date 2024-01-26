const router = require('express').Router();
const taskController = require('../controllers/task.controller');

router.get('/', taskController.getAllTask);
router.get('/:id', taskController.getTask);

module.exports = router;