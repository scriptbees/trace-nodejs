var seetru = require('./../lib/index')({
  app: 'Categories',
  service: 5
});

var restify = require('restify');

var superagent = require('superagent');

function respond(req, res) {

  superagent
    .get('http://localhost:3004/users/1')
    .end(function(err, response) {


      var latency = Math.floor(Math.random() * 20) + 100;

      setTimeout(function () {
        res.json({status: 'ok'})
      }, latency);

    });

}

var server = restify.createServer();
server.get('/cars/2', respond);

server.listen(3002, function() {
  console.log('Restify server %s listening at %s', server.name, server.url);
});