// nodejs_server/index.js

var express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/users.js');
var token = require('./routes/token.js');
var eth = require('./routes/eth.js');
app = express();



// bodyParser is a type of middleware
// It helps convert JSON strings
// the 'use' method assigns a middleware
app.use(bodyParser.json({type: 'application/json'}));
app.use('/api/users', users);
app.use('/api/token', token);
app.use('/api/eth', eth);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, function() {
  console.log(`Listening at http://${hostname}:${port}/...`);
});
