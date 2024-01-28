module.exports = class CoreDatamapper {
  tableName;

  constructor(client) {
    this.client = client;
    // console.log(client);
  }

  async findByPk(id) {
    const preparedQuery = {
      sql: `SELECT * FROM \`${this.tableName}\` WHERE id = ?`,
      values: [id],
    };
    const [rows] = await this.client.execute(preparedQuery);

    if (!rows[0]) {
      return null;
    }

    return rows[0];
  }

  async findAll(object = false) {
    // Include WHERE OBJECT dans requete puis return
    if (object.where) {
      const fields = [];
      const placeholders = [];
      const values = [];

      Object.entries(object.where).forEach(([prop, value]) => {
        fields.push(`"${prop}"`);
        placeholders.push('?');
        values.push(value);
      });
      const where = `WHERE ${fields} = ${placeholders}`;
      const sql = `SELECT * FROM \`${this.tableName}\` ${where}`;
      const result = await this.client.query(sql, values);
      return result.rows;
    }

    // Include INCLUDE OBJECT dasn requete puis return
    if (object.include) {
      const fields = [];
      const placeholders = [];
      const values = [];

      Object.entries(object.include).forEach(([prop, value]) => {
        fields.push(`${prop}`);
        placeholders.push('?');
        values.push(value);
      });
      const where = `WHERE ${fields} = ${placeholders}`;
      const result = await this.client.query(`SELECT * FROM \`${this.tableName}\` ${where}`, values);
      return result.rows;
    }

    const result = await this.client.query(`SELECT * FROM \`${this.tableName}\``);

    return result.rows;
  }

  /**
     * Permet de récupérer l'ensemble des enregistrement d'une table ou une liste d'enregistrement
     * @return {array<object>} une liste d'enregistrements
     * @param {object} object
     * @param {object} object.where
     * @param {object} object.include
*/
  async findOne(object) {
    if (object.where) {
      const fieldArrays = [];
      const placeholders = [];
      const values = [];

      Object.entries(object.where).forEach(([prop, value]) => {
        fieldArrays.push(`${prop}`);
        placeholders.push('?');
        values.push(value);
      });

      const whereClause = fieldArrays.map((field, index) => `${field} = ${placeholders[index]}`).join(' AND ');
      const preparedQuery = {
        sql: `SELECT * FROM \`${this.tableName}\` WHERE ${whereClause}`,
        values,
      };
      const [rows] = await this.client.execute(preparedQuery);
      return rows[0];
    }
    const result = await this.client.execute(`SELECT * FROM \`${this.tableName}\``);
    return result.rows[0];
  }

  /**
         * Insertion de données dans la table
         * @param {object} inputData données à insérer dans la table
         * @returns {object} l'enregistrement créé
         */
  async create(inputData) {
    const fields = [];
    const placeholders = [];
    const values = [];

    Object.entries(inputData).forEach(([prop, value]) => {
      fields.push(`${prop}`);
      placeholders.push('?');
      values.push(value);
    });

    const preparedQuery = {
      sql: `
            INSERT INTO \`${this.tableName}\`
            (${fields})
            VALUES (${placeholders})
            RETURNING *
          `,
      values,
    };
    const result = await this.client.query(preparedQuery);
    const row = result.rows[0];

    return row;
  }

  /**
         * Modification de données dans la table
         * @param {object} param0 données à mettre à jour dans la table comprenant également
         * l'identifiant de l'enregistrement
         * @returns {object} l'enregistrement mis à jour
         */
  async update(id, inputData) {
    const fieldsAndPlaceholders = [];
    const values = [];

    // Check if the column "updated_at" exists
    const reqUpdateColumn = await this.client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = ?
      AND column_name = 'updated_at';
    `, [this.tableName]);

    const updateColumnExists = reqUpdateColumn.rows.length > 0;
    const updateColumn = updateColumnExists ? 'updated_at = now()' : '';
    Object.entries(inputData).forEach(([prop, value]) => {
      fieldsAndPlaceholders.push(`${prop} = ?`);
      values.push(value);
    });

    values.push(id);

    const preparedQuery = {
      sql: `
            UPDATE "${this.tableName}" SET
            ${fieldsAndPlaceholders}
            ${updateColumn ? ',' : ''}
            ${updateColumn}
            WHERE id = ?
            RETURNING *
          `,
      values,
    };

    const result = await this.client.query(preparedQuery);
    const row = result.rows[0];
    return row;
  }

  async delete(id) {
    const result = await this.client.query(`DELETE FROM \`${this.tableName}\` WHERE id = ?`, [id]);
    return result.rowCount;
  }
};
