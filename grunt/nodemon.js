/*!
 * grunt-nodemon task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        options: {
            // env: { // Hash of environment variables to pass to your script.
            //     PORT: process.env.PORT || 3003
            // },
            // nodeArgs: [--debug'], // start node in debug mode // default debug port 5858
            // nodeArgs: [--debug', '--debug=5859'], // start node in debug mode with debug port 5859
            // nodeArgs: ['--debug-brk', '--debug=5859'], // start node in debug mode with an initial breakpoint and debug port 5859
            watch: 'server', // List of folders to watch for changes.
            ext: 'js,html',
            ignore: 'server/**/*.spec.js',
            delay: 500,
            callback: function(nodemon) {
                nodemon.on('log', function(event) {
                    console.log(event.colour);
                });
                // refreshes browser when server reboots
                nodemon.on('restart', function() {
                    // Delay before server listens on port
                    setTimeout(function() {
                        require('fs').writeFileSync('server/.nodemon-restarted', 'server-restarted');
                    }, 1000);
                });
            }
        },
        dev: {
            script: 'server/app.js'
        },
        // Use nodemon to run server in debug mode
        debug: {
            options: {
                // nodeArgs: ['--debug-brk']
                nodeArgs: ['--debug']
            },
            script: 'server/app.js'
        },
        prod: {
            options: {
                env: {
                    NODE_ENV: 'production'
                },
                watch: ['dist/server/*']
            },
            script: 'dist/server/app.js'
        }
    };
};
