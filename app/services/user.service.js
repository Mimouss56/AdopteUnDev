const { user } = require('../models/index.mapper');
const roleService = require('./role.service');
const entService = require('./ent.service');
const infoUserService = require('./infoUser.service');

module.exports = {

  // TODO : get all user with role applicant
  // get all applicant information from an id list

  async getData(id) {
    const userByID = await user.findByPk(id);
    if (!userByID) {
      return {
        code: 404,
        message: 'User not found',
      };
    }
    const infoComplement = await infoUserService.getData(userByID.id);
    const role = await roleService.getData(userByID.id_role);
    const ent = await entService.getData(userByID.id_ent);

    const userDetails = {
      ...userByID,
      ...infoComplement,
      role,
      ent,
    };
    delete userDetails.password;
    delete userDetails.role_id;
    return userByID;
  },

  async getAll() {
    const allUsers = await user.findAll();
    const users = await Promise.all(
      allUsers.map(async (userInfo) => {
        const oneUser = await this.getData(userInfo.id);
        return oneUser;
      }),
    );
    return users;
  },

  async getAllApplicant() {
    const allUsers = await user.findAll({ where: { id_role: 1 } });
    const users = await Promise.all(
      allUsers.map(async (userInfo) => {
        const oneUser = await this.getData(userInfo.id);
        return oneUser;
      }),
    );
    return users;
  },

  async checkUserExist(email, username) {
    const userExist = await user.findOne({ where: { email } });
    const usernameExist = await user.findOne({ where: { username } });
    return {
      emailExist: userExist,
      usernameExist,
    };
  },
};
