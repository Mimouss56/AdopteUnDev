const express = require('express');
const authRouter = require('./auth.router');
const entRouter = require('./ent.router');
const treeRouter = require('./tree.router');
const degreeRouter = require('./degree.router');
const offerRouter = require('./offer.router');
const taskRouter = require('./task.router');

const router = express.Router();
router.use('/auth', require('./auth.router'));

router.use('/applicant', require('./applicant.router'));

router.use('/ent', entRouter);
router.use('/tree', treeRouter);
router.use('/degree', degreeRouter);
router.use('/offer', offerRouter);
router.use('/task', taskRouter);
router.use('/me', require('./me.router'));

router.get('/*', (req, res) => {
  // Modification ici pour prendre en compte les sous-dossiers
  res.json('Welcome to the API');
});

module.exports = router;
