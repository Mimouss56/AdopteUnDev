const bcrypt = require('bcrypt');
const { user } = require('../models/index.mapper');
const userService = require('./user.service');
const loginService = require('./login.service');

module.exports = {

  async register(inputData) {
    const userExist = await userService.checkUserExist(inputData.email, inputData.username);

    if (userExist.emailExist.length !== 0) {
      return {
        code: 400,
        message: 'Email already exist',
      };
    }
    if (userExist.usernameExist.length !== 0) {
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
    const { passwordConfirm, token, ...newInput } = inputData;
    const hash = await bcrypt.hash(inputData.password, 10);
    try {
      await user.create({
        ...newInput,
        password: hash,
      });
      const dataLogin = await loginService.login(inputData.email, inputData.password);
      return dataLogin;
    } catch (error) {
      return {
        code: 500,
        message: `Erreur pendant la création du compte :${error.message}`,
      };
    }
  },

};
