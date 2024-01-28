module.exports = (sequelize, Sequelize) => {
  const Tree = sequelize.define('tree', {
    title: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  });
  return tree;
};
