const db = require('../models/config');

module.exports = { 
    async allEnt() {
        const getAll = await db.Ent.findAll({
            attributes: {
                exclude: ['token'],
            }
        }
        );
        return getAll;
    },

    async oneEnt(id) {
        const getOne = await db.Ent.findByPk(id, {
            attributes: {
                exclude: ['token'],
            }
        });
        return getOne;
    }
}