const CoreDatamapper = require('../core.mapper');

module.exports = class Info extends CoreDatamapper {
  tableName = 'info';

  attributes = [
    'github',
    'linkedin',
    'website',
    'description',
  ];

  async getInfos(idUser) {
    const query = `SELECT * FROM info WHERE id_user = ${idUser}`;
    const [rows] = await this.client.execute(query);
    if (rows.length === 0) return null;
    const { id_user: ref, id, ...rest } = rows[0];
    return rest;
  }
};
