const db = require('../models/config');

module.exports = {

  async getData(id) {
    const userByID = await db.User.findByPk(id, { where: { id_ent: null } });
    if (!userByID) {
      return {
        code: 404,
        message: 'User not found',
      };
    }

    const userDetails = {
      ...userByID,
    };
    delete userDetails.password;
    delete userDetails.role_id;
    return userByID;
  },

  async getAll() {
    const allUsers = await db.User.findAll({ where: { id_ent: null }});
    if (!allUsers) {
      return {
        code: 404,
        message: 'Users not found',
      };
    }
    const users = await Promise.all(
      allUsers.map(async (userInfo) => {
        const oneUser = await this.getData(userInfo.id);
        return oneUser;
      }),
    );
    return users;
  },

};
