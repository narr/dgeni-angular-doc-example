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
            // client Start
            'ng/client/**/*.js',
            '!ng/client/.tmp/**/*.js',
            '!ng/client/bower_components/**/*.js'
            // client End
            // Server Start
            // 'server/**/*.js',
            // Server End
            // Test Start
            // 'e2e/**/*.js'
            // Test End
        ],
        ngServer: {
            options: {
                jshintrc: 'server.jshintrc'
            },
            files: {
                src: [
                    'ng/dgeni/**/*.js',
                    'ng/server.js'
                ]
            }
        }
    };
};
