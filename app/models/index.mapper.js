const client = require('./pg.client');

const User = require('./user/user.mapper');
const Role = require('./user/role.mapper');
const Ent = require('./ent/ent.mapper');
const Task = require('./task.mapper');
const Info = require('./user/info.user.mapper');

module.exports = {
  role: new Role(client),
  user: new User(client),
  ent: new Ent(client),
  task: new Task(client),
  info: new Info(client),
};
