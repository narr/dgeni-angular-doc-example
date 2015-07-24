/*!
 * grunt-jscs task config
 */

'use strict';

module.exports = function() {
    return {
        client: {
            options: {
                config: '<%= yeoman.client %>/.jscsrc'
            },
            src: [
                // client Start
                '<%= yeoman.client %>/**/*.js',
                '!<%= yeoman.client %>/.tmp/**/*.js',
                '!<%= yeoman.client %>/bower_components/**/*.js',
                // client End
                // Test Start
                'e2e/**/*.js'
                // Test End
            ]
        },
        server: {
            options: {
                config: 'server/.jscsrc'
            },
            src: [
                // Server Start
                'server/**/*.js'
                // Server End
            ]
        }
    };
};
