const { Op } = require('sequelize')
const BaseController = require('./BaseController');
const models = require('../models');

class Invitations extends BaseController {
  constructor() {
    super('invitations', models.invitations);

    this.userResource = models.users;
    this.invitationResource = models.invitations;
  }

  async addUsers(req, res) {
    const { users } = req.body;
    const { id } = req.params;

    const isInvitation = await this.invitationResource.findByPk(id);

    if (!isInvitation) {
      return res.status(500).json({
        message: 'invitation not found',
      });
    }

    const listUsers = await this.userResource.findAll({
      where: {
        id: {
          [Op.in]: users,
        },
      },
    });

    listUsers.forEach(async (el) => {
      await el.addInvitation(isInvitation);
    });

    return res.sendStatus(200);
  }

  routes() {
    const route = super.routes();

    route.post('/invitations/addUsers/:id', this.addUsers.bind(this));

    return route;
  }
}

module.exports = new Invitations();
