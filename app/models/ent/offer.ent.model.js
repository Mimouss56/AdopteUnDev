const { DataTypes } = require('sequelize');
const sequelize = require(/* votre instance Sequelize */);

const Offer = sequelize.define('Offer', {
  title: {
    type: DataTypes.STRING(42),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  wage: {
    type: DataTypes.INTEGER(8),
  },
  type: {
    type: DataTypes.STRING(10),
  },
});

Offer.belongsTo(Ent, { foreignKey: 'id_ent' });

module.exports = Offer;
