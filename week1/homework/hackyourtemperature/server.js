const express = require('express');
const server = express();

server.get('/', function(req, res) {
  res.send('hello from backend to frontend!');
});

server.listen(3000, function() {
  console.log('server started');
});
