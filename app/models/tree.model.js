const { DataTypes } = require('sequelize');

const sequelize = require(/* votre instance Sequelize */);

const Tree = sequelize.define('Tree', {
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
});

module.exports = Tree;
