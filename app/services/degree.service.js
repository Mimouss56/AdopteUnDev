const  db  = require('../models/config');

module.exports = {

  async getDegree(id) {
    const degreeByID = await db.Degree.findByPk(id);
    if (!degreeByID) {
      return {
        code: 404,
        message: 'degree not found',
      };
    }
    return degreeByID;
  },

  async getAllDegree() {
    const allDegrees = await db.Degree.findAll();
    if (!allDegrees) {
      return {
        code: 404,
        message: 'degrees not found',
      };
    }
    return allDegrees;
  },
};