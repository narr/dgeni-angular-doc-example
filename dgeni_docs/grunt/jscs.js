/*!
 * grunt-jscs task config
 */

'use strict';

module.exports = function() {

    return {
        ngClient: {
            options: {
                config: '.jscsrc'
            },
            src: [
                'ng/client/**/*.js',
                '!ng/client/bower_components/**/*.js',
                '!ng/client/.tmp/**/*.js'

                // 'e2e/**/*.js'
            ]
        },
        ngServer: {
            options: {
                config: 'server.jscsrc'
            },
            src: [
                'ng/dgeni/**/*.js',
                'ng/server.js'
            ]
        }
    };
};
