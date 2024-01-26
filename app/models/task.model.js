module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define('task', {
    title: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
    rule: {
      type: Sequelize.TEXT,
    },
    context: {
      type: Sequelize.TEXT,
    },
    result: {
      type: Sequelize.TEXT,
    },
    difficulty: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
    },
    timer_limit: {
      type: Sequelize.TIME,
    },
  });
  return Task;
}
