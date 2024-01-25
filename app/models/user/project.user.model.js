module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define('Project', {
    title: {
      type: Sequelize.STRING(42),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    link: {
      type: DataTypes.STRING(255),
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  });
};

Project.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Project;
