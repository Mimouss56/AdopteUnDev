const userService = require('../services/user.service');

module.exports = {
  getOne: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getData(id);
    if (!user) return res.status(404).json({ message: 'Utilisateur introuvable' });
    return res.json(user);
  },

  getAll: async (req, res) => {
    const users = await userService.getAll();
    if (!users) return res.status(404).json({ message: 'Utilisateur introuvable' });
    return res.json(users);
  },
};
