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
    const preparedQuery = {
      text: `SELECT * FROM "${this.tableName}" WHERE id_user = $1`,
      values: [idUser],
    };
    const result = await this.client.query(preparedQuery);
    const { id_user: ref, ...rest } = result;
    return rest.rows[0];
  }
};
