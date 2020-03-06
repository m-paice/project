const BaseController = require('./BaseController');
const models = require('../models');

class Events extends BaseController {
  constructor() {
    super('events', models.events);
  }

  route() {
    const route = super.routes();

    return route;
  }
}

module.exports = new Events();
