const bcrypt = require('bcrypt');
const { task } = require('../models/task.model');
// const roleService = require('./role.service');

module.exports = {

  //TODO : get one / get all

  async getTask(id) {
    const taskByID = await task.findByPk(id);
    if (!taskByID) {
      return {
        code: 404,
        message: 'User not found',
      };
    }
    return userDetails;
  },

  async getAllTask() {
    const allTasks = await Task.findAll();
    if (!allTasks) {
      return {
        code: 404,
        message: 'Tasks not found',
      };
    }
    return allTasks;
  },
};
