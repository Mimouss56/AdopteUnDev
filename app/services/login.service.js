const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { user, role, ent } = require('../models/index.mapper');
const userServices = require('./user.service');

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
    const userInfos = await user.findByPk(userExist.id);
    const userRole = await role.findByPk(userExist.id_role);
    const userEnt = await ent.findByPk(userExist.id_ent);
    console.log(userEnt);

    const userReturn = await userServices.getData(userExist.id);

    let message = `Connecté sous ${username} !`;
    // si delete_at est rempli on mets a jour la date de suppression par null
    if (userExist.deleted_at) {
      message = `Bon retour parmis nous ${username} !`;
    }

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
      data: userReturn,

    };
    return userLogged;
  },
};
