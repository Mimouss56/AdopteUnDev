const offerService = require('../services/offer.service');

module.exports = {
    async getOffer(req,res) {
        const { id } = req.params;
        const data = await offerService.getOffer(id);
        if (data) {
            return res.json(data)
        }
    },

    async getAllOffer(req,res) {
        const data = await offerService.getAllOffer();
        return res.json(data);
    },

    async getOfferData(req,res) {
        const { id } = req.params;
        const data = await offerService.getOfferData(id);
        return res.json(data);
    },

    async getAllOfferData(req,res) {
        const data = await offerService.getAllOfferData();
        return res.json(data);
    }
}