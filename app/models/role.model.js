module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('Role', {
    label: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
  });
  return Role;
};
