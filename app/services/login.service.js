const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/config');

// const user = db.User;

module.exports = {

  async login(email, password) {
    const userExist = await db.User.findOne({
      where: { email },
      include: [
        {
          model: db.Role,
          attributes: ['label'],
        },
      ],
    });
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
    const userInfos = await db.User.findByPk(userExist.id, {
      attributes:
      {
        exclude: ['password', 'id_ent', 'id_role'],
      },
      include: [
        {
          model: db.Role,
          attributes: ['label', 'id'],
        },
        {
          model: db.Ent,
          attributes: ['id','name', "email", "siret"],
        },
      ],
    });
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
      data: userInfos,

    };
    return userLogged;
  },
};
