// Set environment to "dev" if not defined on the system environment.
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const Application = require('./src/application');

try {
  const app = new Application();
  app.start();
} catch (err) {
  console.error(err);
  process.exit(-1);
}
