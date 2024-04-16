const { task } = require('../models/index.mapper');
// const roleService = require('./role.service');

module.exports = {

  // TODO : get one / get all

  async getTask(id) {
    const taskByID = await task.findByPk(id);
    if (!taskByID) {
      return {
        code: 404,
        message: 'User not found',
      };
    }
    return taskByID;
  },

};
