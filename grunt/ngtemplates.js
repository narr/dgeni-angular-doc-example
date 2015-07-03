/*!
 * grunt-angular-templates task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        options: {
            // This should be the name of your apps angular module
            module: 'meanChirpApp',
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
            // usemin: 'app/app.js'
        },
        tmp: {
            // This will store the template URL as {app,components}/**/*.html instead of <%= yeoman.client %>/{app,components}/**/*.html
            cwd: '<%= yeoman.client %>',
            src: [
                '{app,components}/**/*.html'
            ],
            dest: '<%= yeoman.client %>/.tmp/app/templates.js'
        }
    };
};
