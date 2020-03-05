const jwt = require('jsonwebtoken');

const models = require('../models');
const BaseController = require('./BaseController');
const { compareHash, generateHash } = require('../utils/hash');

class User extends BaseController {
  constructor() {
    super('users', models.users);

    this.usersResource = models.users;
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const isUser = await this.usersResource.findOne({
        where: {
          email,
          password,
        },
      });

      if (!isUser) {
        return res.status(500).json({
          message: 'user not founf',
        });
      }

      const token = jwt.sign({ id: isUser.id }, process.env.JWT_SECRET);

      return res.json({
        token,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  async resetPassword(req, res) {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;

    try {
      const isUser = await this.usersResource.findByPk(id);

      if (!isUser) {
        return res.status(500).json({
          message: 'user not found',
        });
      }

      const compare = await compareHash(oldPassword, isUser.password);

      if (!compare) {
        return res.status(500).json({
          message: 'could not validate password',
        });
      }

      const password = await generateHash(newPassword);

      await this.usersResource.update({
        password,
      }, {
        where: {
          id,
        },
      });

      return res.sendStatus(200);
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  routes() {
    const route = super.routes();

    route.post('/auth', this.login.bind(this));
    route.put('/reset-password/:id', this.resetPassword.bind(this));

    return route;
  }
}

module.exports = new User();
