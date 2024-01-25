module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    nom: {
      type: Sequelize.STRING(30),
    },
    prenom: {
      type: Sequelize.STRING(15),
    },
    pseudo: {
      type: Sequelize.STRING(15),
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.INTEGER(1),
      defaultValue: 0,
    },
  });
  return User;
};
