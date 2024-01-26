module.exports = (sequelize, Sequelize) => {
  const Offer = sequelize.define('offer', {
    title: {
      type: Sequelize.STRING(42),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    wage: {
      type: Sequelize.INTEGER(8),
    },
    type: {
      type: Sequelize.STRING(10),
    },
  });
  return Offer;
}

