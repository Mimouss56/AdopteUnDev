const { ent } = require('../models/index.mapper');

module.exports = {
  async allEnt() {
    const getAll = await ent.findAll();
    return getAll;
  },

  async oneEnt(id) {
    const getOne = await ent.findByPk(id);
    return getOne;
  },
};
