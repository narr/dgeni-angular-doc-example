# dgeni-angular-doc-example
[![Build Status](https://travis-ci.org/narr/dgeni-angular-doc-example.svg?branch=master)](https://travis-ci.org/narr/dgeni-angular-doc-example)

An example of Dgeni ngdoc package.

Simply a Grunt version of <https://github.com/Quramy/dgeni-ngdocs-example>

Check out <http://dgeni-ng-doc-example.herokuapp.com>
<br><br><br>
[![Home Screen Shot](https://raw.githubusercontent.com/narr/dgeni-angular-doc-example/master/screenshots/home.jpg "Home")](http://dgeni-ng-doc-example.herokuapp.com)

## Install
Install node modules
```sh
cd dgeni_ng_doc
npm install
```

## Build
Make a Ng Doc from the target Angular App.
```sh
cd dgeni_ng_doc
grunt build
```

## Run Server
### Target App
```sh
cd dgeni_ng_doc
grunt server:target
```
Check out <http://localhost:8888> on a browser.

### Ng Doc
*Execute below after build*
```sh
cd dgeni_ng_doc
grunt server:dist
```
Check out <http://localhost:8080> on a browser.

## Test
*Make sure that the Ng Doc server(server:dist) is running before test*
```sh
cd dgeni_ng_doc
grunt e2e
```
