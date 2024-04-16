const express = require('express');

const { loggedAs } = require('../middlewares/auth.middleware');

const router = express.Router();
router.use('/auth', require('./auth.router'));

router.use('/applicant', loggedAs, require('./applicant.router'));
router.use('/ent', loggedAs, require('./ent.router'));
router.use('/me', loggedAs, require('./me.router'));

router.get('/*', (req, res) => {
  // Modification ici pour prendre en compte les sous-dossiers
  res.json('Welcome to the API');
});

module.exports = router;
