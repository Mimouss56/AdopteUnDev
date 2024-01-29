const { user } = require('../models/index.mapper');
const roleService = require('./role.service');
const entService = require('./ent.service');
const infoUserService = require('./infoUser.service');

const generateByDefault = async (data) => {
  const {
    password, id_role: idRole, id_ent: idEnt, ...rest
  } = data;
  const infoComplement = await infoUserService.getData(rest.id);
  const role = await roleService.getData(idRole);
  const ent = await entService.getData(idEnt);

  return {
    ...rest,
    infoComplement,
    role,
    ent,
  };
};

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

    const userDetails = generateByDefault(userByID);
    return userDetails;
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
