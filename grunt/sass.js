/*!
 * grunt-sass task config
 */

'use strict';

module.exports = function(grunt, config) {

    return {
        options: {
            sourceMap: true,
            sourceMapRoot: 'http://localhost:' + config.DEV_PORT + '/',
            outputStyle: 'compressed'
        },
        vendor: {
            options: {
                includePaths: [
                    '<%= yeoman.client %>/bower_components',
                    '<%= yeoman.client %>/components'
                ]
            },
            files: {
                '<%= yeoman.client %>/.tmp/app/vendor.css': '<%= yeoman.client %>/app/vendor.scss'
            }
        },
        app: {
            options: {
                includePaths: [
                    '<%= yeoman.client %>/.tmp/sass',
                    '<%= yeoman.client %>/app',
                    '<%= yeoman.client %>/components'
                ]
            },
            files: {
                '<%= yeoman.client %>/.tmp/app/app.css': '<%= yeoman.client %>/app/app.scss'
            }
        }
    };
};
