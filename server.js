var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('Todo API Root');
});

app.listen(port, function() {
  console.log('Express listening on port 8080...');
});