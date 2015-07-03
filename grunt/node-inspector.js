/*!
 * grunt-node-inspector task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        dev: {
            options: {
                // to see node debug in browser, open 'http://localhost:3001/debug?port=5858' url
                // 'debug-port': 5858, // node debug port
                'web-port': 3001,
                'web-host': 'localhost'
            }
        }
    };
};
