module.exports = function(config) {

  const version = (req, res, next) => {
    return res.json({
      app: 'Alertify',
      version: '1.0.0'
    }).end();
  }

  return {
    version: version
  }
}
