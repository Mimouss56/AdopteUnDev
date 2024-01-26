const router = require('express').Router();
const treeController = require('../controllers/tree.controller');

router.get('/', treeController.getAllTree);
router.get('/:id', treeController.getTree);
router.get('/data/:id', treeController.getTreeData);
router.post('/', treeController.createTree);

module.exports  = router;