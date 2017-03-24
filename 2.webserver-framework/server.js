'use strict';

var express = require('express'),
app = express();

var http = require('http').Server(app);
app.use(express.static(__dirname + '/'));

var server = app.listen('3000', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at port:'+ port);
});

// http://expressjs.com/en/guide/routing.html
// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function (req, res) {
//  res.send('hello world')
//})

module.exports = app;
