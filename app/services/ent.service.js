const { ent } = require('../models/index.mapper');

module.exports = {
  async getData(id) {
    const entByID = await ent.findByPk(id);
    if (!entByID) {
      return {
        code: 404,
        message: 'Ent not found',
      };
    }
    const entDetails = {
      id: entByID.id,
      name: entByID.name,
      siret: entByID.siret,

    };
    return entDetails;
  },

  async getAll() {
    const getAll = await ent.findAll();
    const ents = await Promise.all(
      getAll.map(async (entInfo) => {
        const oneEnt = await this.getData(entInfo.id);
        return oneEnt;
      }),
    );
    return ents;
  },
};
