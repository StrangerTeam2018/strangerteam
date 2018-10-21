const express = require('express');
const router = express.Router();

module.exports = function(app, config) {
  const version = require ('./controller/version')(config);
  const alerts = require ('./controller/alerts')(config);

  router.get('/version', version.version);

  router.get('/alerts/:lat/:long', alerts.alertByGeoLoc);

  router.get('/alerts/map/:lat/:long', alerts.mapByGeoLoc);

  app.use('/api', router);
}
