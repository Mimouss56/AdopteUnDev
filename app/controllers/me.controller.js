const userService = require('../services/user.service');
const logger = require('../utils/logger');

module.exports = {
  async getMe(req, res) {
    const { id } = req.user;
    const user = await userService.getData(id);
    const [typetoken, token] = req.headers.authorization.split(' ');
    logger.info(typetoken);

    return res.json({ user, sessionToken: token });
  },
};
