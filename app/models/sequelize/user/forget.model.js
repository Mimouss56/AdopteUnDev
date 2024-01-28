const { DataTypes } = require('sequelize');

const sequelize = require(/* votre instance Sequelize */);

const Forgot = sequelize.define('Forgot', {
  token: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Forgot.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Forgot;
