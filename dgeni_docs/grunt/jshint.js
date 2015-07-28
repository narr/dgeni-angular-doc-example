/*!
 * grunt-contrib-jshint task config
 */

'use strict';

module.exports = function() {

    return {
        options: {
            jshintrc: true,
            reporter: require('jshint-stylish')
        },
        ngClient: [
            'ng/client/**/*.js',
            '!ng/client/bower_components/**/*.js',
            '!ng/client/.tmp/**/*.js'

            // 'e2e/**/*.js'
        ],
        ngServer: {
            options: {
                jshintrc: 'server.jshintrc'
            },
            src: [
                'ng/dgeni/**/*.js',
                'ng/server.js'
            ]
        }
    };
};
