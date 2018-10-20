const geo = require('../geo-resolve');
module.exports = function() {

  const version = (req, res, next) => {
    return res.json({
      app: 'Alertify',
      version: '1.0.0'
    }).end();
  }

  return {
    version: version,
    test: function(req,res,next) {
      geo.reverse(38.1919432,-1.0534049, function (err, data) {
        if (err) {
          console.error('ERR', err)
          res.status(500).json(err).end();
        } else {
          console.log(data);
          res.json(data).end();
        }
      })
    }
  }
}