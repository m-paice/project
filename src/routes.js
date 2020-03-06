const { userController, eventsController } = require('./controller');

const routes = [
  userController.routes(),
  eventsController.routes(),
];

module.exports = routes;
