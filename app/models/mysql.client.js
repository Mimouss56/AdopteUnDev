const mysql = require('mysql2');
const logger = require('../utils/logger');

// Utilise createPool pour créer un pool de connexions
const pool = mysql.createPool({
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Obtiens une connexion depuis le pool de promesses
const promisePool = pool.promise();

// On teste la connexion
promisePool
  .getConnection()
  .then(() => {
    logger.log('✅ CONNECTÉ À LA DB');
  })
  .catch((error) => {
    logger.log('❌ ERREUR DE CONNEXION À LA DB', error);
  });

// On exporte le pool de promesses
module.exports = promisePool;
