/*!
 * grunt-http-server task config
 */

'use strict';

module.exports = function() {
    return {
        'src': {
            // the server root directory
            root: 'src',

            // the server port
            // can also be written as a function, e.g.
            // port: function() { return 8282; }
            port: 8282,

            // the host ip address
            // If specified to, for example, '127.0.0.1' the server will
            // only be available on that ip.
            // Specify '0.0.0.0' to be available everywhere
            host: '127.0.0.1',

            // cache: <sec>,
            showDir: true,
            autoIndex: true,

            // server default file extension
            ext: 'html',

            // specify a logger function. By default the requests are
            // sent to stdout.
            // logFn: function(req, res, error) {}

            // run in parallel with other tasks
            runInBackground: false
        }
    };
};
