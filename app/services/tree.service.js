const  db  = require('../models/config');

module.exports = {

  async getTree(id) {
    const treeByID = await db.Tree.findByPk(id);
    if (!treeByID) {
      return {
        code: 404,
        message: 'tree not found',
      };
    }
    return treeByID;
  },

  async getAllTree() {
    const allTrees = await db.Tree.findAll();
    if (!allTrees) {
      return {
        code: 404,
        message: 'trees not found',
      };
    }
    return allTrees;
  },

  
  //to get data for offer
  async getTreeData(id) {
    let treeByID = await this.getTree(id);


  },
};