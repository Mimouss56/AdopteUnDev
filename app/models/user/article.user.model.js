const { DataTypes } = require('sequelize');
const sequelize = require(/* votre instance Sequelize */);

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING(42),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
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

Article.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Article;
