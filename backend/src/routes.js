const express = require('express');
const router = express.Router();
const version = require ('./controller/version')();

module.exports = function(app) {

  router.get('/version', version.version);
  router.get('/test', version.test);

  app.use('/', router);
}