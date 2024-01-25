const express = require('express');
const authRouter = require('./auth.router');
const entRouter = require('./ent.router');

const router = express.Router();
router.use('/auth', require('./auth.router'));

router.use('/applicant', require('./applicant.router'));
router.use('/ent', entRouter);

router.get('/*', (req, res) => {
  // Modification ici pour prendre en compte les sous-dossiers
  res.json('Welcome to the API');
});

module.exports = router;
