const Joi = require('joi');

const userRegister = Joi.object({
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  passwordConfirm: Joi.string().required(),
  idRole: Joi.number().required(),
  token: Joi.string().required(),
  siret: Joi.string().required(),
});

const userLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
module.exports = {
  userRegister,
  userLogin,
};
