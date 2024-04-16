const EntService = require('../services/ent.service');

module.exports = {
  async getAll(req, res) {
    const data = await EntService.getAll();
    return res.json(data);
  },

  async get(req, res) {
    const { id } = req.params;
    const data = await EntService.getData(id);
    if (!data) {
      return res.status(404).json({ message: 'entreprise inexistante' });
    }
    return res.json(data);
  },
};
