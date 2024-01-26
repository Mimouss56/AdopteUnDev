const treeService = require('../services/tree.service');
module.exports = {
    async getTree(req,res) {
        const { id } = req.params;
        const data = await treeService.getTree(id);
        if (data) {
            return res.json(data);
        } else {
            return res.status(404).json({ message: 'tree inexistant'});
        }
    },

    async getAllTree(req,res) {
        const data = await treeService.getAllTree();
        return res.json(data);
    },

    async getTreeData(req,res) {
        const { id } = req.params;
        const data = await treeService.getTreeData(id);
        if (data) {
            return res.json(data);
        } else {
            return res.status(404).json({ message: 'tree inexistant'});
        }
    },

    async getAllTree(req,res) {
        const data = await treeService.getAllTree();
        return res.json(data);
    },

    async createTree(req,res) {
        const {title, description, child } = req.body;
        const inputData = {
            title, description, child
        }
        const data = await treeService.createTree(inputData);
        return res.json(data);
    }
}