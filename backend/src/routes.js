const express = require('express');

module.exports = function(app) {
  const router = express.Router();

  // router.use('/', require(''));

  app.use('/', router);
}