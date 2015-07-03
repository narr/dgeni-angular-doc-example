/*!
 * grunt-concurrent task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        options: {
            logConcurrentOutput: true
        },
        debugServer: [
            'node-inspector',
            'nodemon:debug'
        ]
    };
};
