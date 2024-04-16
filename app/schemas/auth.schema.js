const Joi = require('joi');

const userRegister = Joi.object({
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  passwordConfirm: Joi.string().required(),
  idRole: Joi.number().required(),
  token: Joi.string().optional(),
  siret: Joi.string().optional(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  status: Joi.number().optional(),
  // number or null
  idEnt: Joi.number().optional(),
});

const userLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
module.exports = {
  userRegister,
  userLogin,
};
