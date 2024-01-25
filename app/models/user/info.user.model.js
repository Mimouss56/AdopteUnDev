const { DataTypes } = require('sequelize');

const sequelize = require(/* votre instance Sequelize */);

const Info = sequelize.define('Info', {
  github: {
    type: DataTypes.STRING(255),
  },
  linkedin: {
    type: DataTypes.STRING(255),
  },
  website: {
    type: DataTypes.STRING(255),
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Info.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Info;
