const { role } = require('../models/index.mapper');

const generateByDefault = async (data) => ({
  id: data.id,
  label: data.label,
});

module.exports = {
  async getAll() {
    const roles = await role.findAll();
    if (!roles) {
      return {
        code: 404,
        message: 'Roles not found',
      };
    }
    const returnRoles = roles.map((roleInfo) => {
      const oneRole = generateByDefault(roleInfo);
      return oneRole;
    });
    return returnRoles;
  },

  async getData(id) {
    try {
      const roleByID = await role.findByPk(id);
      return generateByDefault(roleByID);
    } catch (error) {
      return {
        code: 404,
        message: 'Role not found',
      };
    }
  },
  // async create(inputQuery) {
  //   try {
  //     const roleCreated = await role.create(inputQuery);
  //     return generateByDefault(roleCreated);
  //   } catch (error) {
  //     return {
  //       code: 500,
  //       message: 'Role not created',
  //     };
  //   }
  // },
  // async update(id, inputQuery) {
  //   try {
  //     const roleUpdated = await role.update(id, inputQuery);
  //     return roleUpdated;
  //   } catch (error) {
  //     return {
  //       code: 500,
  //       message: 'Role not updated',
  //     };
  //   }
  // },
  // async delete(id) {
  //   try {
  //     const roleDeleted = await role.delete(id);
  //     return roleDeleted;
  //   } catch (error) {
  //     return {
  //       code: 500,
  //       message: 'Role not deleted',
  //     };
  //   }
  // },

  async checkRole(label) {
    const roleExist = await role.findOne({ where: { label } });
    return roleExist;
  },

};
