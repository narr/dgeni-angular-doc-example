/*!
 * grunt-karma task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        options: {
            configFile: 'karma.conf.js'
            // logLevel: 'DEBUG'
        },
        client: {},
        build: {
            autoWatch: false,
            singleRun: true
        }
    };
};
