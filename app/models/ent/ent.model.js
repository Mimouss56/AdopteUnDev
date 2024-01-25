module.exports = (sequelize, Sequelize) => {
  const Ent = sequelize.define('Ent', {
    nom: {
      type: Sequelize.STRING(42),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },
    token: {
      type: Sequelize.INTEGER(8),
      allowNull: false,
    },
    siret: {
      type: Sequelize.STRING(14),
    },
  });
  return Ent;
};
