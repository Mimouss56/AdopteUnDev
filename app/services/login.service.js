const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { user } = require('../models/index.mapper');
const userService = require('./user.service');

module.exports = {

  async login(email, password) {
    const userExist = await user.findOne({ where: { email } });
    if (!userExist) {
      return {
        code: 403,
        message: 'Email or password is incorrect',
      };
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);
    if (!passwordMatch) {
      return {
        code: 403,
        message: 'Email or password is incorrect',
      };
    }
    const { username } = userExist;
    const userInfos = await userService.getData(userExist.id);

    const message = userExist.deleted_at ? `Bon retour parmis nous ${username} !` : `Connecté sous ${username} !`;

    // Création d'un token
    const token = jwt.sign({
      id: userExist.id,
    }, process.env.JWT_SECRET, {
      expiresIn: 24 * 60 * 60, // 24 hours
    });

    const userLogged = {
      id: userInfos.id,
      sessionToken: token,
      message,
      data: userInfos,

    };
    return userLogged;
  },
};
