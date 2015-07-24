/*!
 * grunt-contrib-jshint task config
 */

'use strict';

module.exports = function() {
    return {
        options: {
            // globals: {
            //     "angular": null
            // },
            jshintrc: true,
            reporter: require('jshint-stylish')
        },
        dist: [
            // client Start
            '<%= yeoman.client %>/**/*.js',
            '!<%= yeoman.client %>/.tmp/**/*.js',
            '!<%= yeoman.client %>/bower_components/**/*.js',
            // client End
            // Server Start
            'server/**/*.js',
            // Server End
            // Test Start
            'e2e/**/*.js'
            // Test End
        ]
    };
};
