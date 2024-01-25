const bcrypt = require('bcrypt');
const db = require('../models/config');

module.exports = {

  async register(inputData) {
    const userExist = await this.checkUserExist(inputData.email, inputData.username);

    if (userExist.emailExist) {
      return {
        code: 400,
        message: 'Email already exist',
      };
    }
    if (userExist.usernameExist) {
      return {
        code: 400,
        message: 'Username already exist',
      };
    }
    if (inputData.password !== inputData.passwordConfirm) {
      return {
        code: 400,
        message: 'Password and password confirm must be the same',
      };
    }
    // eslint-disable-next-line no-param-reassign
    delete inputData.passwordConfirm;
    // const newInput = {...inputData, }

    const hash = await bcrypt.hash(inputData.password, 10);
    try {
      const data = await db.User.create({
        ...inputData,
        password: hash,
      });
      return data;
    } catch (error) {
      return {
        code: 500,
        message: 'Erreur pendant la création du compte',
      };
    }
  },
  async checkUserExist(email, username) {
    const userExist = await db.User.findOne({ where: { email } });
    const usernameExist = await db.User.findOne({ where: { username } });
    return {
      emailExist: userExist,
      usernameExist,
    };
  },
};
