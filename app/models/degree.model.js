const { DataTypes } = require('sequelize');

const sequelize = require(/* votre instance Sequelize */);

const Degree = sequelize.define('Degree', {
  label: {
    type: DataTypes.STRING(42),
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
});

module.exports = Degree;
