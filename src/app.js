var http = require('http');
var express = require('express');
var app = express();

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function() {
  console.log('listening on port 8000!');
});
