'use strict';

var express, app, compression, root, port, winston;

express = require('express');
app = express();
compression = require('compression');

root = __dirname + '/client';
// process.env.PORT lets the port be set by Heroku
port = process.env.PORT || 3000;
if (port === 3000) {
    winston = require('winston');
    winston.level = 'debug';
    // winston.add(winston.transports.File, {
    //     filename: 'server.log'
    // });
}

app.use(compression());
app.use(express.static(root));
app.get('*', function(req, res) {
    res.sendFile(root + '/index.html');
});
app.listen(port, function() {
    if (winston) {
        winston.debug('Our app is running on http://localhost:' + port);
    }
});
