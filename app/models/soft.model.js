const { DataTypes } = require('sequelize');

const sequelize = require(/* votre instance Sequelize */);

const Role = sequelize.define('Role', {
  label: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

module.exports = Role;
