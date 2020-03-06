const { userController, eventsController, invitationsController } = require('./controller');

const routes = [
  userController.routes(),
  eventsController.routes(),
  invitationsController.routes(),
];

module.exports = routes;
