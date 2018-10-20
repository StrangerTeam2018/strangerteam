const express = require('express');
const router = express.Router();
const version = require ('./controller/version')();

module.exports = function(app) {

  router.get('/version', version.version);

  app.use('/', router);
}