const  db  = require('../models/config');

module.exports = {

  async getTask(id) {
    const taskByID = await db.Task.findByPk(id);
    if (!taskByID) {
      return {
        code: 404,
        message: 'Task not found',
      };
    }
    return taskByID;
  },

  async getAllTask() {
    const allTasks = await db.Task.findAll();
    if (!allTasks) {
      return {
        code: 404,
        message: 'Tasks not found',
      };
    }
    return allTasks;
  },
};