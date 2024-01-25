const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('open_adopte', 'open', 'MWyZNo@UoOqxG(mK', {
  host: '162.19.68.73',
  dialect: 'mysql',
  port: 3306,
  logging: false,
  define: {
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    freezeTableName: true,
  },
});
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user/user.model')(sequelize, Sequelize);
db.Ent = require('./ent/ent.model')(sequelize, Sequelize);
db.Role = require('./role.model')(sequelize, Sequelize);

db.User.belongsTo(db.Ent, { foreignKey: 'id_ent' });
db.User.belongsTo(db.Role, { foreignKey: 'id_role' });

module.exports = db;
