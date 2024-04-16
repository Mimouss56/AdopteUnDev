const { ent } = require('../models/index.mapper');

const generateByDefault = (data) => ({
  id: data.id,
  name: data.name,
  siret: data.siret,
});

module.exports = {
  async getData(id) {
    const entByID = await ent.findByPk(id);
    if (!entByID) {
      return {
        code: 404,
        message: 'Ent not found',
      };
    }
    const entDetails = generateByDefault(entByID);

    return entDetails;
  },

  async getAll() {
    const getAll = await ent.findAll();
    const ents = await Promise.all(
      getAll.map(async (entInfo) => {
        const entDetails = generateByDefault(entInfo);
        return entDetails;
      }),
    );
    return ents;
  },
};
