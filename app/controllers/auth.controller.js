const loginService = require('../services/login.service');
const registerService = require('../services/register.service');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const data = await loginService.login(email, password);

    if (data.code) return res.status(data.code).json(data.message);
    return res.json(data);
  },

  async register(req, res) {
    const {
      email, username, password, passwordConfirm, idRole, siret,
    } = req.body;
    const inputData = {
      email,
      username,
      password,
      passwordConfirm,
      id_role: idRole,
    };
    // si le siret est renseigné on l'ajoute à l'objet
    if (siret) inputData.siret = siret;

    const data = await registerService.register(inputData);
    if (data.code) return res.status(data.code).json(data.message);
    return res.status(201).json({ message: 'Utilisateur créé', data });
  },
};
