# dgeni-angular-doc-example
[![Build Status](https://travis-ci.org/Narr-/dgeni-angular-doc-example.svg?branch=master)](https://travis-ci.org/Narr-/dgeni-angular-doc-example)

An example of Dgeni ngdoc package.

Simply a Grunt version of <https://github.com/Quramy/dgeni-ngdocs-example>

Check out <http://dgeni-ng-doc-example.herokuapp.com>
<br><br><br>
[![Home Screen Shot](https://raw.githubusercontent.com/Narr-/dgeni-angular-doc-example/master/screenshots/home.jpg "Home")](http://dgeni-ng-doc-example.herokuapp.com)

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

### Ng Doc
*Execute below after build*
```sh
cd dgeni_ng_doc
grunt server:dist
```
