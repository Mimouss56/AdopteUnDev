const userService = require('../services/user.service');

module.exports = {
  async getMe(req, res) {
    const { id } = req.user;
    const user = await userService.getData(id);
    return res.json({ user });
  },
};
