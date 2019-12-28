var express = require('express'),
    request = require('request'),
    app = express();

app.get('/', function(req, res, next) {
    request.get({
      url: `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`,
      json: true
    }, (error, response, body) => {
      res.send(body)
    })
});

module.exports = app;
