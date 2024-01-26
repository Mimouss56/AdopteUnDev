const router = require('express').Router();
const offerController = require('../controllers/offer.controller');

router.get('/', offerController.getAllOffer);
router.get('/data', offerController.getAllOfferData);
router.get('/:id', offerController.getOffer);
router.get('/data/:id', offerController.getOfferData);

module.exports = router;