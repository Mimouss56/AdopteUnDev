const db = require('./config');

module.exports = (sequelize, Sequelize) => {
    const Degree_has_degree = sequelize.define('degree_has_degree', {
        id_degree_parent: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: db.Degree,
                key: 'id'
            }
        },
          id_degree_child: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: db.Degree,
                key: 'id'
            }
          }  
        });
    return Degree_has_degree;
}