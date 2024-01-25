const { DataTypes } = require('sequelize');

const sequelize = require(/* votre instance Sequelize */);

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  rule: {
    type: DataTypes.TEXT,
  },
  context: {
    type: DataTypes.TEXT,
  },
  result: {
    type: DataTypes.TEXT,
  },
  difficulty: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  timer_limit: {
    type: DataTypes.TIME,
  },
});

module.exports = Task;
