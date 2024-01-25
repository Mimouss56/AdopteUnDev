const express = require('express');
const authRouter = require('./auth.router');

const router = express.Router();
router.use('/auth', authRouter);

router.get('/*', (req, res) => {
  // Modification ici pour prendre en compte les sous-dossiers
  res.json('Welcome to the API');
});

module.exports = router;
