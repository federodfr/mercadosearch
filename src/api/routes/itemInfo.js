var express = require('express'),
    request = require('request'),
    app = express(),
    obj = {};

app.get('/:id', 
  (req, res, next) =>{
    request.get(
      {
        url: `https://api.mercadolibre.com/items/${req.params.id}`,
        json: true
      }, 
      (error, response, body) =>  {
        Object.assign(obj, body) ;
        next()
      }
    );
  },
  (req, res, next) => {
    request.get(
      {
        url: `https://api.mercadolibre.com/items/${req.params.id}/description`,
        json: true
      }, 
      (error, response,body) => {
        Object.assign(obj, body);
        next()  
      }  
    );
  }, 
  (req,res) => {
    res.send(obj)
  }
)



// app.get('/:id', function(req, res, next) {
//   request.get({
//       url: `https://api.mercadolibre.com/items/${req.params.id}`, 
//       json: true
//     }, (error, response, body) =>  res.send(body));

// });



module.exports = app;
