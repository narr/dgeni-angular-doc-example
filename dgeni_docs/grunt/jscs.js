/*!
 * grunt-jscs task config
 */

'use strict';

module.exports = function() {
    return {
        ngClientType: {
            options: {
                config: '.jscsrc'
            },
            src: [
                'ng/client/**/*.js',
                '!ng/client/bower_components/**/*.js',
                '!ng/client/.tmp/**/*.js'
            ]
        },
        ngServerType: {
            options: {
                config: 'server.jscsrc'
            },
            src: [
                'ng/dgeni/**/*.js',
                '!ng/dgeni/config/templates/**/*.js',
                'ng/server.js'
            ]
        }
    };
};
