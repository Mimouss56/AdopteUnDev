const client = require('./mysql.client');

const User = require('./user/user.mapper');
const Role = require('./user/role.mapper');
const Ent = require('./ent/ent.mapper');

module.exports = {
  role: new Role(client),
  user: new User(client),
  ent: new Ent(client),
};
