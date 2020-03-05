const { userController } = require('./controller');

const routes = [
  userController.routes(),
];

module.exports = routes;
