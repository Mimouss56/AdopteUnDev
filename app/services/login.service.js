const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db } = require('../models/config');

// const user = db.User;

module.exports = {

  async login(email, password) {
    const userExist = await db.User.findOne({ where: { email } });
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
    // Mettre à jour la date de la dernière connexion
    await db.User.update(userExist.id, {
      last_visited: new Date(),
      delete_at: null,
    });
    // Return user && token
    const userLogged = {
      id: userExist.id,
      sessionToken: token,
      message,

    };
    return userLogged;
  },
};
