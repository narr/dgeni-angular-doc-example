'use strict';

var express, app, root, port;
express = require('express');
app = express();
root = __dirname + '/target_src';
port = 8888;
app.use(express.static(root));
app.get('*', function(req, res) {
    res.sendFile(root + '/index.html');
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
