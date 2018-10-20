const config = require('./config');
const Server = require('./server');

module.exports = class Application {

  start() {
    const sslPort = Application.normalizePort(
      config.port || '8080'
    );
    this.createServer(sslPort, config.ssl);
  }

  createServer(port, sslConfig = null) {
    const ip = '0.0.0.0';
    const server = new Server(ip, port, config);
    server.start(sslConfig);
  }

  static normalizePort(val) {
    const port = parseInt(val, 10);

    // named pipe
    if (Number.isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
  }
}
