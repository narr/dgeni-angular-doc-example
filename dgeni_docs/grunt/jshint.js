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
        ngClientType: [
            'ng/client/**/*.js',
            '!ng/client/bower_components/**/*.js',
            '!ng/client/.tmp/**/*.js'
        ],
        ngServerType: {
            options: {
                jshintrc: 'server.jshintrc'
            },
            src: [
                'ng/dgeni/**/*.js',
                '!ng/dgeni/config/templates/**/*.js',
                'ng/server.js',
                'ng/server.spec.js'
            ]
        }
    };
};
