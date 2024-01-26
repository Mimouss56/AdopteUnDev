const db = require('../models/config');

module.exports = {

  async getTree(id) {
    const treeByID = await db.Tree.findByPk(id);
    if (!treeByID) {
      return {
        code: 404,
        message: 'tree not found',
      };
    };
    return treeByID;
  },

  async getAllTree() {
    const allTrees = await db.Tree.findAll();
    if (!allTrees) {
      return {
        code: 404,
        message: 'trees not found',
      };
    };
    return allTrees;
  },


  //to get data for offer
  async getTreeData(id) {
    try {
      let treeById = await this.getTree(id);
    } catch (error) {
      return {
        code: 500,
        message: "Erreur de récupération de l'arbre",
      }
    };
    let childsId = await db.treeHasDegree.findAll({ where: { id_tree: id } });
    

  },

  async createTree(inputData) {
    try {
      const tree = await db.Tree.create({
        title: inputData.title,
        description: inputData.description
      });
      try {
        const treeDegrees = await Promise.all(
          inputData.child.map(async (degreeId) => {
            const treeHasDegree = await db.treeHasDegree.create({
              id_tree: tree.id,
              id_degree: degreeId
            })
          }),
        )
      } catch (error) {
        return {
          code: 500,
          message: "Erreur pendant la liaison de l'arbre et des compétences",
        }
      };
      return tree;
    } catch (error) {
      return {
        code: 500,
        message: "Erreur pendant la création de l'arbre",
      };
    }
  }
};