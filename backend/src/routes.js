const express = require('express');
const router = express.Router();
const version = require ('./controller/version')();
const alerts = require ('./controller/alerts')();

module.exports = function(app) {
  router.get('/version', version.version);

  router.get('/alerts/:lat/:long', alerts.alertByGeoLoc);

  app.use('/api', router);
}
