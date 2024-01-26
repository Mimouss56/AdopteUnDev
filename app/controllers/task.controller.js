const taskService = require('../services/task.service');

module.exports = {

    async getTask(req,res) {
        const { id } = req.params;
        const data = await taskService.getTask(id);
        return res.json(data);
    },

    async getAllTask(req,res) {
        const data = await taskService.getAllTask();
        return res.json(data);
    }
}