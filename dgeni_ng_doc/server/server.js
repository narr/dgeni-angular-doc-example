'use strict';

var express, app, compression, fs, root, port, winston;

function sendIndex(req, res) {
    fs.readFile(root + '/index.html', 'utf8', function(err, page) {
        if (err) {
            return winston.error(err);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(page.replace(/<head>/, '<head><base href="/">'));
        res.end();
    });
}

express = require('express');
app = express();
compression = require('compression');
fs = require('fs');

root = __dirname + '/../client';
// process.env.PORT let's the port be set by Heroku
port = process.env.PORT || 3000;
if (port !== 80) {
    winston = require('winston');
    winston.level = 'debug';
    winston.add(winston.transports.File, {
        filename: __dirname + '/server.log'
    });
}

app.use(compression());
app.get('/', function(req, res) {
    // res.sendFile(root + '/index.html');
    sendIndex(req, res);
});
app.use(express.static(root));
app.get('*', function(req, res) {
    sendIndex(req, res);
});

app
    .listen(port, function() {
        if (winston) {
            winston.debug('Our app is running on http://localhost:' + port);
        }
    })
    .on('error', function(err) {
        if (winston) {
            if (err.code === 'EADDRINUSE') {
                winston.debug('The port is already in use..!!');
            }
        }
    });

module.exports = app;
