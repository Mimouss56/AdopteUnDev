const EntService = require('../services/ent.service');

module.exports = {
    async allEnt(req,res) {
        const data = await EntService.allEnt();
        return res.json(data);
    },

    async oneEnt(req,res) {
        const { id } = req.params;
        const data = await EntService.oneEnt(id);
        if (data) {
            return res.json(data);
        } else {
            return res.status(404).json({ message: 'entreprise inexistante'});
        }    
    }
}