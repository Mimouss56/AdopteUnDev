module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('role', {
    label: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
  });
  return Role;
};
