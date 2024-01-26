const Joi = require('joi');

const id = Joi.number().integer().positive().required();

module.exports = {
  id,
};
