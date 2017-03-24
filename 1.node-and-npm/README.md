## Install Node.js and NPM

## In Production Mode
```
npm install
```

## In Development Mode

## To configure NPM
### Initialize your 'package.json' file with the following command 
```
npm init
```

## Install frontend dependencies
### Install Bower globally if not already install
```
npm install bower -g
```

## Initialize Bower configuration
```
bower init
```
### Bower install's frontend dependencies in the directory 'bower_components'
### Using Bower to install angular
```
bower install angular
```

### Install Bootstrap using Bower 
```
bower install bootstrap
```

### To Install Font Awesome
```
bower install fontawesome
```

## To Reference Angular and Bootstrap
```html
/* Add a script reference in html file to the bootstrap, fontawesome
   and angular.js file in the bower_components directory
*/

<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css">
<script src="bower_components/angular/angular.js"></script>
```
