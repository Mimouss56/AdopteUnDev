const  db  = require('../models/config');
const treeService = require('./tree.service');
const entService = require('./ent.service');

module.exports = {

  async getOffer(id) {
    const offerByID = await db.Offer.findByPk(id);
    if (!offerByID) {
      return {
        code: 404,
        message: 'offer not found',
      };
    }
    return offerByID;
  },

  async getAllOffer() {
    const alloffers = await db.Offer.findAll();
    if (!alloffers) {
      return {
        code: 404,
        message: 'offers not found',
      };
    }
    return alloffers;
  },

  //A VERIFIER
  async getOfferData(id) {
    const offerByID = await this.getOffer(id);
    const entData = await entService.oneEnt(id)
    const treeData = await treeService.getTreeData(id);
    const offerData = {
        id: offerByID.id,
        description: offerByID.description,
        title: offerByID.title,
        wage: offerByID.wage,
        ent : entData,
        tree: treeData
    };
    return offerData;
  },

  async getAllOfferData(){
    const allOffers = await this.getAllOffer();
    const allOffersData = await Promise.all(
        allOffers.map(async (offerInfo) => {
          const oneOffer = await this.getOfferData(offerInfo.id);
          return oneOffer;
        }),
      );
      return allOffersData;
  },
};