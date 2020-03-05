const jwt = require('jsonwebtoken');
const models = require('../models');
const BaseController = require('./BaseController');

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

  routes() {
    const route = super.routes();

    route.post('/auth', this.login.bind(this));

    return route;
  }
}

module.exports = new User();
