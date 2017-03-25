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

### Introduction to Linting Using jsLint
#### Installing jsLint
```
npm install -g jslint
```
#### Configure jslint as project dependecy
```
npm install --save-dev jslint 
```

#### Usage 
```
jslint /path/to/file
```

### Introduction to Unit Test with Karma and Jasmine
#### Setting Karma and jasmine
##### Install karma, karma-cli and jasmine
```
npm install -g karma-cli
```

##### Add karma and jasmine to project
```
npm install karma jasmine karma-jasmine karma-chrome-launcher --save-dev
```

### Configuring karma
```
karma init
```

### Start Test
```
karma start
or 
npm tests
```
