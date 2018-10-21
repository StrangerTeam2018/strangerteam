fs = require('fs');

module.exports = {
  port: 4040,
  AEMET: {
    apiKey: fs.readFileSync('./src/config/aemet.key')
  }
}
