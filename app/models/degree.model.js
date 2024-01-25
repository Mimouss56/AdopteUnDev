const { sequelize, Sequelize } = require("./config");

module.exports = (sequelize, Sequelize) => {
  const Degree = sequelize.define('degree', {
    label: {
      type: Sequelize.STRING(42),
      allowNull: false,
    },
    level: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
    },
    priority: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
    },
  });
  return Degree;
}

