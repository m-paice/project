require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const { PORT } = process.env;

class Server {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.init();
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  routes() {
    routes.forEach((route) => this.app.use(route));
  }

  init() {
    this.app.listen(PORT, console.log(`server online in port ${PORT}`));
  }
}

const server = new Server();
