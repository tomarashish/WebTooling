## Install Node.js and NPM

## In Production Mode
### Install dependencies using npm package.json
```
npm install
```

### Start Web Server Using Express.js
```
node server.js
```

## In Development Mode

### Install Node, NPM, Bower same as in first part
### Configure npm init
```
npm init
```
### Install dev package
```
npm install --save-dev gulp
npm install --save-dev gulp-watch 
```
### Creating a Basic Express Server 
#### Install Express.js 
```
npm install express --save
```

### Creating the Server File

#### A basic server file in Express looks like this:

```javascript
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

module.exports = app;
```

### Start Webserver
```
node server.js
```
