const { info } = require('../models/index.mapper');

module.exports = {

  async getData(id) {
    const userByID = await info.getInfos(id);
    if (!userByID) {
      return [];
    }
    return userByID;
  },
};
