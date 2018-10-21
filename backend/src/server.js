const http = require('http');
const fs = require('fs');
const express = require('express');
const routes = require('./routes.js');

class Server {
  constructor(ip, port, config) {
    this.ip = ip;
    this.port = port;
    this.config = config;

    this.onError = this.onError.bind(this);
    this.onListening = this.onListening.bind(this);
  }

  async start(sslConfig = null) {
    const app = await this.createApp();

    this.server = http.createServer(app);
    this.server.on('error', this.onError);
    this.server.on('listening', this.onListening);
    this.server.listen(this.port, this.ip);
  }

  onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind =
      typeof this.port === 'string' ? 'Pipe ' + this.port : 'Port ' + this.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        throw new Error(bind + ' requires elevated privileges');
      case 'EADDRINUSE':
        throw new Error(bind + ' is already in use');
      default:
        throw error;
    }
  }

  onListening() {
    const addr = this.server.address();
    const bind =
      typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.info('Listening on' + bind);
  }

  async createApp() {
    const app = express();

    app.set('trust proxy', true);
    app.set('port', this.port);

    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(
    //   bodyParser.raw({
    //     type: 'application/octet-stream',
    //     limit: '100mb'
    //   })
    // );

    routes(app, this.config);

    return app;
  }
}

module.exports = Server;
